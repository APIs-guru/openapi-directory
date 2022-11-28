import { SpeakeasyBase } from "../../../internal/utils";
import { ComputeEnum } from "./computeenum";
import { RunningModeEnum } from "./runningmodeenum";
/**
 * Describes a WorkSpace.
**/
export declare class WorkspaceProperties extends SpeakeasyBase {
    computeTypeName?: ComputeEnum;
    rootVolumeSizeGib?: number;
    runningMode?: RunningModeEnum;
    runningModeAutoStopTimeoutInMinutes?: number;
    userVolumeSizeGib?: number;
}

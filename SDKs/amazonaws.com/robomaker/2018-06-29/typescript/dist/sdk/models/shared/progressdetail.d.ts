import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RobotDeploymentStepEnum } from "./robotdeploymentstepenum";
/**
 * Information about the progress of a deployment job.
**/
export declare class ProgressDetail extends SpeakeasyBase {
    currentProgress?: RobotDeploymentStepEnum;
    estimatedTimeRemainingSeconds?: number;
    percentDone?: number;
    targetResource?: string;
}

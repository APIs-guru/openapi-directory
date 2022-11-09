import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FirstBootEnum } from "./firstbootenum";
/**
 * Configure launced instance.
**/
export declare class LaunchedInstance extends SpeakeasyBase {
    ec2InstanceId?: string;
    firstBoot?: FirstBootEnum;
    jobId?: string;
}

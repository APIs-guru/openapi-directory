import { SpeakeasyBase } from "../../../internal/utils";
import { ScaleInPolicyUpdate } from "./scaleinpolicyupdate";
import { ScaleOutPolicyUpdate } from "./scaleoutpolicyupdate";
/**
 * The updates to the auto scaling parameters for the connector.
**/
export declare class AutoScalingUpdate extends SpeakeasyBase {
    maxWorkerCount: number;
    mcuCount: number;
    minWorkerCount: number;
    scaleInPolicy: ScaleInPolicyUpdate;
    scaleOutPolicy: ScaleOutPolicyUpdate;
}

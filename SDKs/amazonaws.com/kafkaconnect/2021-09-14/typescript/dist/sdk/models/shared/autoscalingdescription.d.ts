import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ScaleInPolicyDescription } from "./scaleinpolicydescription";
import { ScaleOutPolicyDescription } from "./scaleoutpolicydescription";
/**
 * Information about the auto scaling parameters for the connector.
**/
export declare class AutoScalingDescription extends SpeakeasyBase {
    maxWorkerCount?: number;
    mcuCount?: number;
    minWorkerCount?: number;
    scaleInPolicy?: ScaleInPolicyDescription;
    scaleOutPolicy?: ScaleOutPolicyDescription;
}

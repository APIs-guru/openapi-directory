import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceHealthStateEnum } from "./instancehealthstateenum";
import { InstanceHealthReasonEnum } from "./instancehealthreasonenum";
/**
 * Describes information about the health of the instance.
**/
export declare class InstanceHealthSummary extends SpeakeasyBase {
    instanceHealth?: InstanceHealthStateEnum;
    instanceHealthReason?: InstanceHealthReasonEnum;
    instanceName?: string;
}

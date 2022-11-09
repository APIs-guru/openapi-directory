import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoScalingDescription } from "./autoscalingdescription";
import { ProvisionedCapacityDescription } from "./provisionedcapacitydescription";
/**
 * A description of the connector's capacity.
**/
export declare class CapacityDescription extends SpeakeasyBase {
    autoScaling?: AutoScalingDescription;
    provisionedCapacity?: ProvisionedCapacityDescription;
}

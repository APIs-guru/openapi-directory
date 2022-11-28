import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingDescription } from "./autoscalingdescription";
import { ProvisionedCapacityDescription } from "./provisionedcapacitydescription";



// CapacityDescription
/** 
 * A description of the connector's capacity.
**/
export class CapacityDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoScaling" })
  autoScaling?: AutoScalingDescription;

  @SpeakeasyMetadata({ data: "json, name=provisionedCapacity" })
  provisionedCapacity?: ProvisionedCapacityDescription;
}

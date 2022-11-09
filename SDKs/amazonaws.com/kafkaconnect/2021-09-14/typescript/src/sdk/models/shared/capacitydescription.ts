import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoScalingDescription } from "./autoscalingdescription";
import { ProvisionedCapacityDescription } from "./provisionedcapacitydescription";


// CapacityDescription
/** 
 * A description of the connector's capacity.
**/
export class CapacityDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoScaling" })
  autoScaling?: AutoScalingDescription;

  @Metadata({ data: "json, name=provisionedCapacity" })
  provisionedCapacity?: ProvisionedCapacityDescription;
}

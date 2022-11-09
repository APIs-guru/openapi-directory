import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEcsServicePlacementStrategiesDetails
/** 
 * A placement strategy that determines how to place the tasks for the service.
**/
export class AwsEcsServicePlacementStrategiesDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Field" })
  field?: string;

  @Metadata({ data: "json, name=Type" })
  type?: string;
}

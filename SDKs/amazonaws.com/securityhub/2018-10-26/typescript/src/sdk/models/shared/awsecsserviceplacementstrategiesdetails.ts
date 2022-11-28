import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEcsServicePlacementStrategiesDetails
/** 
 * A placement strategy that determines how to place the tasks for the service.
**/
export class AwsEcsServicePlacementStrategiesDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Field" })
  field?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}

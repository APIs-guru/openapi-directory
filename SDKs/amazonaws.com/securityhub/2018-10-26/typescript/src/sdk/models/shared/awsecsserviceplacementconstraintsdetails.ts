import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEcsServicePlacementConstraintsDetails
/** 
 * A placement constraint for the tasks in the service.
**/
export class AwsEcsServicePlacementConstraintsDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Expression" })
  expression?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}

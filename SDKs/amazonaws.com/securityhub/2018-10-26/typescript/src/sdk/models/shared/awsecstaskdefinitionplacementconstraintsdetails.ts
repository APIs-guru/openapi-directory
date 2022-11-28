import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEcsTaskDefinitionPlacementConstraintsDetails
/** 
 * A placement constraint object to use for tasks.
**/
export class AwsEcsTaskDefinitionPlacementConstraintsDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Expression" })
  expression?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}

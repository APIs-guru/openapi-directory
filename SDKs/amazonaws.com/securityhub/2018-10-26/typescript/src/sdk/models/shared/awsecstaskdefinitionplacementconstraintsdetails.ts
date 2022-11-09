import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEcsTaskDefinitionPlacementConstraintsDetails
/** 
 * A placement constraint object to use for tasks.
**/
export class AwsEcsTaskDefinitionPlacementConstraintsDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Expression" })
  expression?: string;

  @Metadata({ data: "json, name=Type" })
  type?: string;
}

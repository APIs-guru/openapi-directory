import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEcsServicePlacementConstraintsDetails
/** 
 * A placement constraint for the tasks in the service.
**/
export class AwsEcsServicePlacementConstraintsDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Expression" })
  expression?: string;

  @Metadata({ data: "json, name=Type" })
  type?: string;
}

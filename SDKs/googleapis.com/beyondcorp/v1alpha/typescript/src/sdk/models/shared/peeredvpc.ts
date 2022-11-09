import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PeeredVpc
/** 
 * The peered VPC owned by the consumer project.
**/
export class PeeredVpc extends SpeakeasyBase {
  @Metadata({ data: "json, name=networkVpc" })
  networkVpc?: string;
}

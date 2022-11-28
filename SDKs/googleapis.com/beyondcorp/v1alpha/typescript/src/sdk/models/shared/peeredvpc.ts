import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PeeredVpc
/** 
 * The peered VPC owned by the consumer project.
**/
export class PeeredVpc extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=networkVpc" })
  networkVpc?: string;
}

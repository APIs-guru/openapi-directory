import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeValueTarget } from "./attributevaluetarget";



// AccountAttribute
/** 
 * A name value pair that describes an aspect of an account. 
**/
export class AccountAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata()
  attributeName?: string;

  @SpeakeasyMetadata({ elemType: AttributeValueTarget })
  attributeValues?: AttributeValueTarget[];
}

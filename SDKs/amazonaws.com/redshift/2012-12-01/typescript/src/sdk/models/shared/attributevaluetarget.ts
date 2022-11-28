import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AttributeValueTarget
/** 
 * Describes an attribute value.
**/
export class AttributeValueTarget extends SpeakeasyBase {
  @SpeakeasyMetadata()
  attributeValue?: string;
}

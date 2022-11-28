import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AccessControlAttributeValue
/** 
 * The value used for mapping a specified attribute to an identity source.
**/
export class AccessControlAttributeValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Source" })
  source: string[];
}

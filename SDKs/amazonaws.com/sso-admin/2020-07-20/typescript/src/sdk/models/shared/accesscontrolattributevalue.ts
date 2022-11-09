import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AccessControlAttributeValue
/** 
 * The value used for mapping a specified attribute to an identity source.
**/
export class AccessControlAttributeValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=Source" })
  source: string[];
}

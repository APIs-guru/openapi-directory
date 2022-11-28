import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MessageTag
/** 
 * Contains the name and value of a tag that you apply to an email. You can use message tags when you publish email sending events. 
**/
export class MessageTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value: string;
}

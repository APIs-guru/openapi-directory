import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MessageTag
/** 
 * Contains the name and value of a tag that you apply to an email. You can use message tags when you publish email sending events. 
**/
export class MessageTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Value" })
  value: string;
}

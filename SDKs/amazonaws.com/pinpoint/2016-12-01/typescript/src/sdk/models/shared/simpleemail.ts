import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SimpleEmailPart } from "./simpleemailpart";
import { SimpleEmailPart } from "./simpleemailpart";
import { SimpleEmailPart } from "./simpleemailpart";


// SimpleEmail
/** 
 * Specifies the contents of an email message, composed of a subject, a text part, and an HTML part.
**/
export class SimpleEmail extends SpeakeasyBase {
  @Metadata({ data: "json, name=HtmlPart" })
  htmlPart?: SimpleEmailPart;

  @Metadata({ data: "json, name=Subject" })
  subject?: SimpleEmailPart;

  @Metadata({ data: "json, name=TextPart" })
  textPart?: SimpleEmailPart;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SimpleEmailPart } from "./simpleemailpart";



// SimpleEmail
/** 
 * Specifies the contents of an email message, composed of a subject, a text part, and an HTML part.
**/
export class SimpleEmail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HtmlPart" })
  htmlPart?: SimpleEmailPart;

  @SpeakeasyMetadata({ data: "json, name=Subject" })
  subject?: SimpleEmailPart;

  @SpeakeasyMetadata({ data: "json, name=TextPart" })
  textPart?: SimpleEmailPart;
}

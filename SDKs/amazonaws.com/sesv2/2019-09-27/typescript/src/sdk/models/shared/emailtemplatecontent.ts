import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EmailTemplateContent
/** 
 * The content of the email, composed of a subject line, an HTML part, and a text-only part.
**/
export class EmailTemplateContent extends SpeakeasyBase {
  @Metadata({ data: "json, name=Html" })
  html?: string;

  @Metadata({ data: "json, name=Subject" })
  subject?: string;

  @Metadata({ data: "json, name=Text" })
  text?: string;
}

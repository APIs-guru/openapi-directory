import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EmailTemplateContent
/** 
 * The content of the email, composed of a subject line, an HTML part, and a text-only part.
**/
export class EmailTemplateContent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Html" })
  html?: string;

  @SpeakeasyMetadata({ data: "json, name=Subject" })
  subject?: string;

  @SpeakeasyMetadata({ data: "json, name=Text" })
  text?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EmailTemplateContent } from "./emailtemplatecontent";



// GetEmailTemplateResponse
/** 
 * The following element is returned by the service.
**/
export class GetEmailTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TemplateContent" })
  templateContent: EmailTemplateContent;

  @SpeakeasyMetadata({ data: "json, name=TemplateName" })
  templateName: string;
}

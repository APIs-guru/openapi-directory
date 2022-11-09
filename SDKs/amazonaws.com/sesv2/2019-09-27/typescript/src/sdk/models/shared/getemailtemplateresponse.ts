import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EmailTemplateContent } from "./emailtemplatecontent";


// GetEmailTemplateResponse
/** 
 * The following element is returned by the service.
**/
export class GetEmailTemplateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=TemplateContent" })
  templateContent: EmailTemplateContent;

  @Metadata({ data: "json, name=TemplateName" })
  templateName: string;
}

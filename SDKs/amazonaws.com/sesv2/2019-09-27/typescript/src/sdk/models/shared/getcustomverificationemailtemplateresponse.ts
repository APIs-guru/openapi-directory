import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetCustomVerificationEmailTemplateResponse
/** 
 * The following elements are returned by the service.
**/
export class GetCustomVerificationEmailTemplateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FailureRedirectionURL" })
  failureRedirectionUrl?: string;

  @Metadata({ data: "json, name=FromEmailAddress" })
  fromEmailAddress?: string;

  @Metadata({ data: "json, name=SuccessRedirectionURL" })
  successRedirectionUrl?: string;

  @Metadata({ data: "json, name=TemplateContent" })
  templateContent?: string;

  @Metadata({ data: "json, name=TemplateName" })
  templateName?: string;

  @Metadata({ data: "json, name=TemplateSubject" })
  templateSubject?: string;
}

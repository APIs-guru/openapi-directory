import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetCustomVerificationEmailTemplateResponse
/** 
 * The following elements are returned by the service.
**/
export class GetCustomVerificationEmailTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FailureRedirectionURL" })
  failureRedirectionUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=FromEmailAddress" })
  fromEmailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=SuccessRedirectionURL" })
  successRedirectionUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=TemplateContent" })
  templateContent?: string;

  @SpeakeasyMetadata({ data: "json, name=TemplateName" })
  templateName?: string;

  @SpeakeasyMetadata({ data: "json, name=TemplateSubject" })
  templateSubject?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomVerificationEmailTemplateMetadata
/** 
 * Contains information about a custom verification email template.
**/
export class CustomVerificationEmailTemplateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FailureRedirectionURL" })
  failureRedirectionUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=FromEmailAddress" })
  fromEmailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=SuccessRedirectionURL" })
  successRedirectionUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=TemplateName" })
  templateName?: string;

  @SpeakeasyMetadata({ data: "json, name=TemplateSubject" })
  templateSubject?: string;
}

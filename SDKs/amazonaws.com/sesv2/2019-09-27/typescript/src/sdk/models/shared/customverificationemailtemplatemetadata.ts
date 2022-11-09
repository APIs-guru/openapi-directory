import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomVerificationEmailTemplateMetadata
/** 
 * Contains information about a custom verification email template.
**/
export class CustomVerificationEmailTemplateMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=FailureRedirectionURL" })
  failureRedirectionUrl?: string;

  @Metadata({ data: "json, name=FromEmailAddress" })
  fromEmailAddress?: string;

  @Metadata({ data: "json, name=SuccessRedirectionURL" })
  successRedirectionUrl?: string;

  @Metadata({ data: "json, name=TemplateName" })
  templateName?: string;

  @Metadata({ data: "json, name=TemplateSubject" })
  templateSubject?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomVerificationEmailTemplateMetadata } from "./customverificationemailtemplatemetadata";



// ListCustomVerificationEmailTemplatesResponse
/** 
 * The following elements are returned by the service.
**/
export class ListCustomVerificationEmailTemplatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CustomVerificationEmailTemplates", elemType: CustomVerificationEmailTemplateMetadata })
  customVerificationEmailTemplates?: CustomVerificationEmailTemplateMetadata[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomVerificationEmailTemplateMetadata } from "./customverificationemailtemplatemetadata";


// ListCustomVerificationEmailTemplatesResponse
/** 
 * The following elements are returned by the service.
**/
export class ListCustomVerificationEmailTemplatesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CustomVerificationEmailTemplates", elemType: shared.CustomVerificationEmailTemplateMetadata })
  customVerificationEmailTemplates?: CustomVerificationEmailTemplateMetadata[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}

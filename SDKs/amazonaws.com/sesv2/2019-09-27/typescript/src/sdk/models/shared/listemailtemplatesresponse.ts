import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EmailTemplateMetadata } from "./emailtemplatemetadata";


// ListEmailTemplatesResponse
/** 
 * The following elements are returned by the service.
**/
export class ListEmailTemplatesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=TemplatesMetadata", elemType: shared.EmailTemplateMetadata })
  templatesMetadata?: EmailTemplateMetadata[];
}

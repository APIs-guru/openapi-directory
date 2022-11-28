import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EmailTemplateMetadata } from "./emailtemplatemetadata";



// ListEmailTemplatesResponse
/** 
 * The following elements are returned by the service.
**/
export class ListEmailTemplatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=TemplatesMetadata", elemType: EmailTemplateMetadata })
  templatesMetadata?: EmailTemplateMetadata[];
}

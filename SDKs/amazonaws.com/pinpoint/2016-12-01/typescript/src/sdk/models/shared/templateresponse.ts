import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TemplateTypeEnum } from "./templatetypeenum";


// TemplateResponse
/** 
 * Provides information about a message template that's associated with your Amazon Pinpoint account.
**/
export class TemplateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=CreationDate" })
  creationDate: string;

  @Metadata({ data: "json, name=DefaultSubstitutions" })
  defaultSubstitutions?: string;

  @Metadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate: string;

  @Metadata({ data: "json, name=TemplateDescription" })
  templateDescription?: string;

  @Metadata({ data: "json, name=TemplateName" })
  templateName: string;

  @Metadata({ data: "json, name=TemplateType" })
  templateType: TemplateTypeEnum;

  @Metadata({ data: "json, name=Version" })
  version?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}

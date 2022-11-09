import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TemplateTypeEnum } from "./templatetypeenum";


// SmsTemplateResponse
/** 
 * Provides information about the content and settings for a message template that can be used in text messages that are sent through the SMS channel.
**/
export class SmsTemplateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=Body" })
  body?: string;

  @Metadata({ data: "json, name=CreationDate" })
  creationDate: string;

  @Metadata({ data: "json, name=DefaultSubstitutions" })
  defaultSubstitutions?: string;

  @Metadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate: string;

  @Metadata({ data: "json, name=RecommenderId" })
  recommenderId?: string;

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

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TemplateTypeEnum } from "./templatetypeenum";


// VoiceTemplateResponse
/** 
 * Provides information about the content and settings for a message template that can be used in messages that are sent through the voice channel.
**/
export class VoiceTemplateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=Body" })
  body?: string;

  @Metadata({ data: "json, name=CreationDate" })
  creationDate: string;

  @Metadata({ data: "json, name=DefaultSubstitutions" })
  defaultSubstitutions?: string;

  @Metadata({ data: "json, name=LanguageCode" })
  languageCode?: string;

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

  @Metadata({ data: "json, name=VoiceId" })
  voiceId?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}

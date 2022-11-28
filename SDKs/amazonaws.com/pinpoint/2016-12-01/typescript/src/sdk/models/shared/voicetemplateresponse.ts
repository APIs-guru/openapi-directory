import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TemplateTypeEnum } from "./templatetypeenum";



// VoiceTemplateResponse
/** 
 * Provides information about the content and settings for a message template that can be used in messages that are sent through the voice channel.
**/
export class VoiceTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=Body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate: string;

  @SpeakeasyMetadata({ data: "json, name=DefaultSubstitutions" })
  defaultSubstitutions?: string;

  @SpeakeasyMetadata({ data: "json, name=LanguageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate: string;

  @SpeakeasyMetadata({ data: "json, name=TemplateDescription" })
  templateDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=TemplateName" })
  templateName: string;

  @SpeakeasyMetadata({ data: "json, name=TemplateType" })
  templateType: TemplateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;

  @SpeakeasyMetadata({ data: "json, name=VoiceId" })
  voiceId?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}

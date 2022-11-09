import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SsmlMessageType
/** 
 * An object that defines a message that contains SSML-formatted text.
**/
export class SsmlMessageType extends SpeakeasyBase {
  @Metadata({ data: "json, name=LanguageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=Text" })
  text?: string;

  @Metadata({ data: "json, name=VoiceId" })
  voiceId?: string;
}

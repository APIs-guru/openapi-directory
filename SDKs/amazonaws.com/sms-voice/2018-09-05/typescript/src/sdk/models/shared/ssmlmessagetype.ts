import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SsmlMessageType
/** 
 * An object that defines a message that contains SSML-formatted text.
**/
export class SsmlMessageType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LanguageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=Text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=VoiceId" })
  voiceId?: string;
}

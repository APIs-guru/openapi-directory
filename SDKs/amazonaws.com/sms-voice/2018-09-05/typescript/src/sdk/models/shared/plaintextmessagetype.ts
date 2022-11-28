import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PlainTextMessageType
/** 
 * An object that defines a message that contains unformatted text.
**/
export class PlainTextMessageType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LanguageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=Text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=VoiceId" })
  voiceId?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PlainTextMessageType
/** 
 * An object that defines a message that contains unformatted text.
**/
export class PlainTextMessageType extends SpeakeasyBase {
  @Metadata({ data: "json, name=LanguageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=Text" })
  text?: string;

  @Metadata({ data: "json, name=VoiceId" })
  voiceId?: string;
}

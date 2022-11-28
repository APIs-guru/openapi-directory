import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VoiceMessage
/** 
 * Specifies the settings for a one-time voice message that's sent directly to an endpoint through the voice channel.
**/
export class VoiceMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=LanguageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=OriginationNumber" })
  originationNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=Substitutions" })
  substitutions?: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=VoiceId" })
  voiceId?: string;
}

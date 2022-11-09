import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VoiceMessage
/** 
 * Specifies the settings for a one-time voice message that's sent directly to an endpoint through the voice channel.
**/
export class VoiceMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=Body" })
  body?: string;

  @Metadata({ data: "json, name=LanguageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=OriginationNumber" })
  originationNumber?: string;

  @Metadata({ data: "json, name=Substitutions" })
  substitutions?: Map<string, string[]>;

  @Metadata({ data: "json, name=VoiceId" })
  voiceId?: string;
}

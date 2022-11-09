import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VoiceSettings
/** 
 * Defines settings for using an Amazon Polly voice to communicate with a user.
**/
export class VoiceSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=voiceId" })
  voiceId: string;
}

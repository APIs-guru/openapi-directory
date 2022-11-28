import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VoiceSettings
/** 
 * Defines settings for using an Amazon Polly voice to communicate with a user.
**/
export class VoiceSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=voiceId" })
  voiceId: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SendVoiceMessageResponse
/** 
 * An object that that contains the Message ID of a Voice message that was sent successfully.
**/
export class SendVoiceMessageResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=MessageId" })
  messageId?: string;
}

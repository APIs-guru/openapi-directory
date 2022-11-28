import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SendEmailResponse
/** 
 * A unique message ID that you receive when an email is accepted for sending.
**/
export class SendEmailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MessageId" })
  messageId?: string;
}

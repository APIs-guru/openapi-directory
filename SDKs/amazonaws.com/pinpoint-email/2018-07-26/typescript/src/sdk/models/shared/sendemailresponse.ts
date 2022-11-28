import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SendEmailResponse
/** 
 * A unique message ID that you receive when Amazon Pinpoint accepts an email for sending.
**/
export class SendEmailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MessageId" })
  messageId?: string;
}

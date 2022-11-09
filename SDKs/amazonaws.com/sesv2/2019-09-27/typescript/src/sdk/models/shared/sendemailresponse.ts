import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SendEmailResponse
/** 
 * A unique message ID that you receive when an email is accepted for sending.
**/
export class SendEmailResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=MessageId" })
  messageId?: string;
}

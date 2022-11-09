import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SendCustomVerificationEmailResponse
/** 
 * The following element is returned by the service.
**/
export class SendCustomVerificationEmailResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=MessageId" })
  messageId?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SendCustomVerificationEmailResponse
/** 
 * The following element is returned by the service.
**/
export class SendCustomVerificationEmailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MessageId" })
  messageId?: string;
}

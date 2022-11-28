import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SendMessageResult
/** 
 * The <code>MD5OfMessageBody</code> and <code>MessageId</code> elements.
**/
export class SendMessageResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  md5OfMessageAttributes?: string;

  @SpeakeasyMetadata()
  md5OfMessageBody?: string;

  @SpeakeasyMetadata()
  md5OfMessageSystemAttributes?: string;

  @SpeakeasyMetadata()
  messageId?: string;

  @SpeakeasyMetadata()
  sequenceNumber?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SendMessageBatchResultEntry
/** 
 * Encloses a <code>MessageId</code> for a successfully-enqueued message in a <code> <a>SendMessageBatch</a>.</code> 
**/
export class SendMessageBatchResultEntry extends SpeakeasyBase {
  @SpeakeasyMetadata()
  id: string;

  @SpeakeasyMetadata()
  md5OfMessageAttributes?: string;

  @SpeakeasyMetadata()
  md5OfMessageBody: string;

  @SpeakeasyMetadata()
  md5OfMessageSystemAttributes?: string;

  @SpeakeasyMetadata()
  messageId: string;

  @SpeakeasyMetadata()
  sequenceNumber?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Encloses a <code>MessageId</code> for a successfully-enqueued message in a <code> <a>SendMessageBatch</a>.</code>
**/
export declare class SendMessageBatchResultEntry extends SpeakeasyBase {
    id: string;
    md5OfMessageAttributes?: string;
    md5OfMessageBody: string;
    md5OfMessageSystemAttributes?: string;
    messageId: string;
    sequenceNumber?: string;
}

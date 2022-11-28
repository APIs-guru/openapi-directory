import { SpeakeasyBase } from "../../../internal/utils";
import { BatchResultErrorEntry } from "./batchresulterrorentry";
import { SendMessageBatchResultEntry } from "./sendmessagebatchresultentry";
/**
 * For each message in the batch, the response contains a <code> <a>SendMessageBatchResultEntry</a> </code> tag if the message succeeds or a <code> <a>BatchResultErrorEntry</a> </code> tag if the message fails.
**/
export declare class SendMessageBatchResult extends SpeakeasyBase {
    failed: BatchResultErrorEntry[];
    successful: SendMessageBatchResultEntry[];
}

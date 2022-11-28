import { SpeakeasyBase } from "../../../internal/utils";
import { BatchResultErrorEntry } from "./batchresulterrorentry";
import { DeleteMessageBatchResultEntry } from "./deletemessagebatchresultentry";
/**
 * For each message in the batch, the response contains a <code> <a>DeleteMessageBatchResultEntry</a> </code> tag if the message is deleted or a <code> <a>BatchResultErrorEntry</a> </code> tag if the message can't be deleted.
**/
export declare class DeleteMessageBatchResult extends SpeakeasyBase {
    failed: BatchResultErrorEntry[];
    successful: DeleteMessageBatchResultEntry[];
}

import { SpeakeasyBase } from "../../../internal/utils";
import { BatchResultErrorEntry } from "./batchresulterrorentry";
import { ChangeMessageVisibilityBatchResultEntry } from "./changemessagevisibilitybatchresultentry";
/**
 * For each message in the batch, the response contains a <code> <a>ChangeMessageVisibilityBatchResultEntry</a> </code> tag if the message succeeds or a <code> <a>BatchResultErrorEntry</a> </code> tag if the message fails.
**/
export declare class ChangeMessageVisibilityBatchResult extends SpeakeasyBase {
    failed: BatchResultErrorEntry[];
    successful: ChangeMessageVisibilityBatchResultEntry[];
}

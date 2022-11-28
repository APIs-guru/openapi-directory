import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchResultErrorEntry } from "./batchresulterrorentry";
import { ChangeMessageVisibilityBatchResultEntry } from "./changemessagevisibilitybatchresultentry";



// ChangeMessageVisibilityBatchResult
/** 
 * For each message in the batch, the response contains a <code> <a>ChangeMessageVisibilityBatchResultEntry</a> </code> tag if the message succeeds or a <code> <a>BatchResultErrorEntry</a> </code> tag if the message fails.
**/
export class ChangeMessageVisibilityBatchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: BatchResultErrorEntry })
  failed: BatchResultErrorEntry[];

  @SpeakeasyMetadata({ elemType: ChangeMessageVisibilityBatchResultEntry })
  successful: ChangeMessageVisibilityBatchResultEntry[];
}

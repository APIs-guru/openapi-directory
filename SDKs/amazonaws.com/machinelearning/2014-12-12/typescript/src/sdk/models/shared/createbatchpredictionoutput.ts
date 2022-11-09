import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateBatchPredictionOutput
/** 
 * <p> Represents the output of a <code>CreateBatchPrediction</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateBatchPrediction</code> operation is asynchronous. You can poll for status updates by using the <code>&gt;GetBatchPrediction</code> operation and checking the <code>Status</code> parameter of the result. </p>
**/
export class CreateBatchPredictionOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=BatchPredictionId" })
  batchPredictionId?: string;
}

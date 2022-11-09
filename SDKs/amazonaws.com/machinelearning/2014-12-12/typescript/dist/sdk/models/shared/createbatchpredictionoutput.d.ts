import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * <p> Represents the output of a <code>CreateBatchPrediction</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateBatchPrediction</code> operation is asynchronous. You can poll for status updates by using the <code>&gt;GetBatchPrediction</code> operation and checking the <code>Status</code> parameter of the result. </p>
**/
export declare class CreateBatchPredictionOutput extends SpeakeasyBase {
    batchPredictionId?: string;
}

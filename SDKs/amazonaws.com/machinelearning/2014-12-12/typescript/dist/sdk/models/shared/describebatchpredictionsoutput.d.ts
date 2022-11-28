import { SpeakeasyBase } from "../../../internal/utils";
import { BatchPrediction } from "./batchprediction";
/**
 * Represents the output of a <code>DescribeBatchPredictions</code> operation. The content is essentially a list of <code>BatchPrediction</code>s.
**/
export declare class DescribeBatchPredictionsOutput extends SpeakeasyBase {
    nextToken?: string;
    results?: BatchPrediction[];
}

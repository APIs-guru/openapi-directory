import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchPrediction } from "./batchprediction";



// DescribeBatchPredictionsOutput
/** 
 * Represents the output of a <code>DescribeBatchPredictions</code> operation. The content is essentially a list of <code>BatchPrediction</code>s.
**/
export class DescribeBatchPredictionsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Results", elemType: BatchPrediction })
  results?: BatchPrediction[];
}

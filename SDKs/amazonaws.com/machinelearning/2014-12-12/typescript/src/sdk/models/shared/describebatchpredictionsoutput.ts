import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BatchPrediction } from "./batchprediction";


// DescribeBatchPredictionsOutput
/** 
 * Represents the output of a <code>DescribeBatchPredictions</code> operation. The content is essentially a list of <code>BatchPrediction</code>s.
**/
export class DescribeBatchPredictionsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Results", elemType: shared.BatchPrediction })
  results?: BatchPrediction[];
}

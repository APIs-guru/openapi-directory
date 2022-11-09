import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateBatchPredictionOutput
/** 
 * <p>Represents the output of an <code>UpdateBatchPrediction</code> operation.</p> <p>You can see the updated content by using the <code>GetBatchPrediction</code> operation.</p>
**/
export class UpdateBatchPredictionOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=BatchPredictionId" })
  batchPredictionId?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateBatchPredictionOutput
/** 
 * <p>Represents the output of an <code>UpdateBatchPrediction</code> operation.</p> <p>You can see the updated content by using the <code>GetBatchPrediction</code> operation.</p>
**/
export class UpdateBatchPredictionOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BatchPredictionId" })
  batchPredictionId?: string;
}

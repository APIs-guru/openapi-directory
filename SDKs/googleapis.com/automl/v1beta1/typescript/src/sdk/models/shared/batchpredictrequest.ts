import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchPredictInputConfig } from "./batchpredictinputconfig";
import { BatchPredictOutputConfig } from "./batchpredictoutputconfig";



// BatchPredictRequest
/** 
 * Request message for PredictionService.BatchPredict.
**/
export class BatchPredictRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inputConfig" })
  inputConfig?: BatchPredictInputConfig;

  @SpeakeasyMetadata({ data: "json, name=outputConfig" })
  outputConfig?: BatchPredictOutputConfig;

  @SpeakeasyMetadata({ data: "json, name=params" })
  params?: Map<string, string>;
}

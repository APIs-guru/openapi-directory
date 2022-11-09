import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BatchPredictInputConfig } from "./batchpredictinputconfig";
import { BatchPredictOutputConfig } from "./batchpredictoutputconfig";


// BatchPredictRequest
/** 
 * Request message for PredictionService.BatchPredict.
**/
export class BatchPredictRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=inputConfig" })
  inputConfig?: BatchPredictInputConfig;

  @Metadata({ data: "json, name=outputConfig" })
  outputConfig?: BatchPredictOutputConfig;

  @Metadata({ data: "json, name=params" })
  params?: Map<string, string>;
}

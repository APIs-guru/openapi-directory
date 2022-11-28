import { SpeakeasyBase } from "../../../internal/utils";
import { BatchPredictInputConfig } from "./batchpredictinputconfig";
import { BatchPredictOutputConfig } from "./batchpredictoutputconfig";
/**
 * Request message for PredictionService.BatchPredict.
**/
export declare class BatchPredictRequest extends SpeakeasyBase {
    inputConfig?: BatchPredictInputConfig;
    outputConfig?: BatchPredictOutputConfig;
    params?: Map<string, string>;
}

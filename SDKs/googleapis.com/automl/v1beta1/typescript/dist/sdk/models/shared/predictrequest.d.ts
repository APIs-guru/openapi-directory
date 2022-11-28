import { SpeakeasyBase } from "../../../internal/utils";
import { ExamplePayload } from "./examplepayload";
/**
 * Request message for PredictionService.Predict.
**/
export declare class PredictRequest extends SpeakeasyBase {
    params?: Map<string, string>;
    payload?: ExamplePayload;
}

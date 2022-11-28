import { SpeakeasyBase } from "../../../internal/utils";
import { AnnotationPayload } from "./annotationpayload";
import { ExamplePayload } from "./examplepayload";
/**
 * Response message for PredictionService.Predict.
**/
export declare class PredictResponse extends SpeakeasyBase {
    metadata?: Map<string, string>;
    payload?: AnnotationPayload[];
    preprocessedInput?: ExamplePayload;
}

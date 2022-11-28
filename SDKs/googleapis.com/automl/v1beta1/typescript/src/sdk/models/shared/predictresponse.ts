import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnnotationPayload } from "./annotationpayload";
import { ExamplePayload } from "./examplepayload";



// PredictResponse
/** 
 * Response message for PredictionService.Predict.
**/
export class PredictResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=payload", elemType: AnnotationPayload })
  payload?: AnnotationPayload[];

  @SpeakeasyMetadata({ data: "json, name=preprocessedInput" })
  preprocessedInput?: ExamplePayload;
}

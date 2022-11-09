import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AnnotationPayload } from "./annotationpayload";
import { ExamplePayload } from "./examplepayload";


// PredictResponse
/** 
 * Response message for PredictionService.Predict.
**/
export class PredictResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @Metadata({ data: "json, name=payload", elemType: shared.AnnotationPayload })
  payload?: AnnotationPayload[];

  @Metadata({ data: "json, name=preprocessedInput" })
  preprocessedInput?: ExamplePayload;
}

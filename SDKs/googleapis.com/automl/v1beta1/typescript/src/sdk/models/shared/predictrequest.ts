import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExamplePayload } from "./examplepayload";



// PredictRequest
/** 
 * Request message for PredictionService.Predict.
**/
export class PredictRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=params" })
  params?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: ExamplePayload;
}

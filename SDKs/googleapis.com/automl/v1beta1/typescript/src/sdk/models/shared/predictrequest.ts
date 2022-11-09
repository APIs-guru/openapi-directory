import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExamplePayload } from "./examplepayload";


// PredictRequest
/** 
 * Request message for PredictionService.Predict.
**/
export class PredictRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=params" })
  params?: Map<string, string>;

  @Metadata({ data: "json, name=payload" })
  payload?: ExamplePayload;
}

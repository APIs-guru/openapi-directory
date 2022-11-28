import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Prediction } from "./prediction";



export class PredictOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Prediction" })
  prediction?: Prediction;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Prediction } from "./prediction";


export class PredictOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Prediction" })
  prediction?: Prediction;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Summary } from "./summary";



// EvaluationResult
/** 
 * The evaluation results for the training of a model.
**/
export class EvaluationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=F1Score" })
  f1Score?: number;

  @SpeakeasyMetadata({ data: "json, name=Summary" })
  summary?: Summary;
}

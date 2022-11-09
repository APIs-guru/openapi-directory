import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Summary } from "./summary";


// EvaluationResult
/** 
 * The evaluation results for the training of a model.
**/
export class EvaluationResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=F1Score" })
  f1Score?: number;

  @Metadata({ data: "json, name=Summary" })
  summary?: Summary;
}

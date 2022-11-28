import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateEvaluationOutput
/** 
 * <p>Represents the output of an <code>UpdateEvaluation</code> operation.</p> <p>You can see the updated content by using the <code>GetEvaluation</code> operation.</p>
**/
export class UpdateEvaluationOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EvaluationId" })
  evaluationId?: string;
}

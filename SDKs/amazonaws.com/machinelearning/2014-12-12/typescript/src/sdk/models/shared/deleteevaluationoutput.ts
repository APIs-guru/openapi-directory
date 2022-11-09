import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteEvaluationOutput
/** 
 * <p> Represents the output of a <code>DeleteEvaluation</code> operation. The output indicates that Amazon Machine Learning (Amazon ML) received the request.</p> <p>You can use the <code>GetEvaluation</code> operation and check the value of the <code>Status</code> parameter to see whether an <code>Evaluation</code> is marked as <code>DELETED</code>.</p>
**/
export class DeleteEvaluationOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=EvaluationId" })
  evaluationId?: string;
}

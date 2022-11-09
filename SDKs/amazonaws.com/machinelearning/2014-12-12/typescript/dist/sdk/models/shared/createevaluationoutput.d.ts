import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * <p> Represents the output of a <code>CreateEvaluation</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p> <code>CreateEvaluation</code> operation is asynchronous. You can poll for status updates by using the <code>GetEvcaluation</code> operation and checking the <code>Status</code> parameter. </p>
**/
export declare class CreateEvaluationOutput extends SpeakeasyBase {
    evaluationId?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Shows the results of the human in the loop evaluation. If there is no HumanLoopArn, the input did not trigger human review.
**/
export declare class HumanLoopActivationOutput extends SpeakeasyBase {
    humanLoopActivationConditionsEvaluationResults?: string;
    humanLoopActivationReasons?: string[];
    humanLoopArn?: string;
}

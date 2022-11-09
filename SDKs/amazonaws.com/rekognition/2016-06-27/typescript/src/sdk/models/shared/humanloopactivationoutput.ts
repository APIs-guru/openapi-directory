import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HumanLoopActivationOutput
/** 
 * Shows the results of the human in the loop evaluation. If there is no HumanLoopArn, the input did not trigger human review.
**/
export class HumanLoopActivationOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=HumanLoopActivationConditionsEvaluationResults" })
  humanLoopActivationConditionsEvaluationResults?: string;

  @Metadata({ data: "json, name=HumanLoopActivationReasons" })
  humanLoopActivationReasons?: string[];

  @Metadata({ data: "json, name=HumanLoopArn" })
  humanLoopArn?: string;
}

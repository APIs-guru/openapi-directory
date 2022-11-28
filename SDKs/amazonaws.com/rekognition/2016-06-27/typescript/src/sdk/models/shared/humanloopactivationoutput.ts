import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HumanLoopActivationOutput
/** 
 * Shows the results of the human in the loop evaluation. If there is no HumanLoopArn, the input did not trigger human review.
**/
export class HumanLoopActivationOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HumanLoopActivationConditionsEvaluationResults" })
  humanLoopActivationConditionsEvaluationResults?: string;

  @SpeakeasyMetadata({ data: "json, name=HumanLoopActivationReasons" })
  humanLoopActivationReasons?: string[];

  @SpeakeasyMetadata({ data: "json, name=HumanLoopArn" })
  humanLoopArn?: string;
}

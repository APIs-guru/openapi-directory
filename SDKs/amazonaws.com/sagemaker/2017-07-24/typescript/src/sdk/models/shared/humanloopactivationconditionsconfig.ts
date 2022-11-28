import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HumanLoopActivationConditionsConfig
/** 
 * Defines under what conditions SageMaker creates a human loop. Used within . See for the required format of activation conditions.
**/
export class HumanLoopActivationConditionsConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HumanLoopActivationConditions" })
  humanLoopActivationConditions: string;
}

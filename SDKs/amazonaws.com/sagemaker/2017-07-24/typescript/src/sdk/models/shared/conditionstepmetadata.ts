import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConditionOutcomeEnum } from "./conditionoutcomeenum";



// ConditionStepMetadata
/** 
 * Metadata for a Condition step.
**/
export class ConditionStepMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Outcome" })
  outcome?: ConditionOutcomeEnum;
}

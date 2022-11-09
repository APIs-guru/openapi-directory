import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConditionOutcomeEnum } from "./conditionoutcomeenum";


// ConditionStepMetadata
/** 
 * Metadata for a Condition step.
**/
export class ConditionStepMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=Outcome" })
  outcome?: ConditionOutcomeEnum;
}

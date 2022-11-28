import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SimpleCondition } from "./simplecondition";



// MultiConditionalBranch
/** 
 * Specifies a condition to evaluate for an activity path in a journey.
**/
export class MultiConditionalBranch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Condition" })
  condition?: SimpleCondition;

  @SpeakeasyMetadata({ data: "json, name=NextActivity" })
  nextActivity?: string;
}

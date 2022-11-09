import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SimpleCondition } from "./simplecondition";


// MultiConditionalBranch
/** 
 * Specifies a condition to evaluate for an activity path in a journey.
**/
export class MultiConditionalBranch extends SpeakeasyBase {
  @Metadata({ data: "json, name=Condition" })
  condition?: SimpleCondition;

  @Metadata({ data: "json, name=NextActivity" })
  nextActivity?: string;
}

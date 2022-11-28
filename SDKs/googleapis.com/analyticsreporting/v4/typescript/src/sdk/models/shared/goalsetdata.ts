import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoalData } from "./goaldata";



// GoalSetData
/** 
 * Represents a set of goals that were reached in an activity.
**/
export class GoalSetData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=goals", elemType: GoalData })
  goals?: GoalData[];
}

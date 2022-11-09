import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoalData } from "./goaldata";


// GoalSetData
/** 
 * Represents a set of goals that were reached in an activity.
**/
export class GoalSetData extends SpeakeasyBase {
  @Metadata({ data: "json, name=goals", elemType: shared.GoalData })
  goals?: GoalData[];
}

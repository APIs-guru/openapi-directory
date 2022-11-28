import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GoalRemoveSubgoalRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=subgoal" })
  subgoal: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GoalRemoveSubgoalRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=subgoal" })
  subgoal: string;
}

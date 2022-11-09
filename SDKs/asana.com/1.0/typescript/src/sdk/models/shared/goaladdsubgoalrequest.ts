import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GoalAddSubgoalRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=insert_after" })
  insertAfter?: string;

  @Metadata({ data: "json, name=insert_before" })
  insertBefore?: string;

  @Metadata({ data: "json, name=subgoal" })
  subgoal: string;
}

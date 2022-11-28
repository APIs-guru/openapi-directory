import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GoalAddSubgoalRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=insert_after" })
  insertAfter?: string;

  @SpeakeasyMetadata({ data: "json, name=insert_before" })
  insertBefore?: string;

  @SpeakeasyMetadata({ data: "json, name=subgoal" })
  subgoal: string;
}

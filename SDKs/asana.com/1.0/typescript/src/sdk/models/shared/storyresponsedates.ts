import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StoryResponseDates
/** 
 * *Conditional*
**/
export class StoryResponseDates extends SpeakeasyBase {
  @Metadata({ data: "json, name=due_at" })
  dueAt?: Date;

  @Metadata({ data: "json, name=due_on" })
  dueOn?: Date;

  @Metadata({ data: "json, name=start_on" })
  startOn?: Date;
}

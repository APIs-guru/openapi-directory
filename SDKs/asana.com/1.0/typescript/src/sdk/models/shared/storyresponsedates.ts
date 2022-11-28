import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StoryResponseDates
/** 
 * *Conditional*
**/
export class StoryResponseDates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=due_at" })
  dueAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=due_on" })
  dueOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=start_on" })
  startOn?: Date;
}

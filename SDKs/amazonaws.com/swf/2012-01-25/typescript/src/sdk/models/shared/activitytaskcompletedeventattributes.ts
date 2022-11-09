import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ActivityTaskCompletedEventAttributes
/** 
 * Provides the details of the <code>ActivityTaskCompleted</code> event.
**/
export class ActivityTaskCompletedEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=result" })
  result?: string;

  @Metadata({ data: "json, name=scheduledEventId" })
  scheduledEventId: number;

  @Metadata({ data: "json, name=startedEventId" })
  startedEventId: number;
}

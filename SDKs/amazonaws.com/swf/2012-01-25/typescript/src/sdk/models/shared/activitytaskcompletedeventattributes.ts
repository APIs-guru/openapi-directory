import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActivityTaskCompletedEventAttributes
/** 
 * Provides the details of the <code>ActivityTaskCompleted</code> event.
**/
export class ActivityTaskCompletedEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduledEventId" })
  scheduledEventId: number;

  @SpeakeasyMetadata({ data: "json, name=startedEventId" })
  startedEventId: number;
}

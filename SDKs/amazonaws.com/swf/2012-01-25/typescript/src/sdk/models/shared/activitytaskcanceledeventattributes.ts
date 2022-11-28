import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActivityTaskCanceledEventAttributes
/** 
 * Provides the details of the <code>ActivityTaskCanceled</code> event.
**/
export class ActivityTaskCanceledEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: string;

  @SpeakeasyMetadata({ data: "json, name=latestCancelRequestedEventId" })
  latestCancelRequestedEventId?: number;

  @SpeakeasyMetadata({ data: "json, name=scheduledEventId" })
  scheduledEventId: number;

  @SpeakeasyMetadata({ data: "json, name=startedEventId" })
  startedEventId: number;
}

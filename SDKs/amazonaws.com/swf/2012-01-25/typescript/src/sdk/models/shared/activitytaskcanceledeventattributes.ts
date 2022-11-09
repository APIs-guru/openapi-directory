import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ActivityTaskCanceledEventAttributes
/** 
 * Provides the details of the <code>ActivityTaskCanceled</code> event.
**/
export class ActivityTaskCanceledEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=details" })
  details?: string;

  @Metadata({ data: "json, name=latestCancelRequestedEventId" })
  latestCancelRequestedEventId?: number;

  @Metadata({ data: "json, name=scheduledEventId" })
  scheduledEventId: number;

  @Metadata({ data: "json, name=startedEventId" })
  startedEventId: number;
}

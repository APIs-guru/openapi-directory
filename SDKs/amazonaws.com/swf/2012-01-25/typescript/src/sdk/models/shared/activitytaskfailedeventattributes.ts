import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActivityTaskFailedEventAttributes
/** 
 * Provides the details of the <code>ActivityTaskFailed</code> event.
**/
export class ActivityTaskFailedEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduledEventId" })
  scheduledEventId: number;

  @SpeakeasyMetadata({ data: "json, name=startedEventId" })
  startedEventId: number;
}

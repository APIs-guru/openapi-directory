import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ActivityTaskFailedEventAttributes
/** 
 * Provides the details of the <code>ActivityTaskFailed</code> event.
**/
export class ActivityTaskFailedEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=details" })
  details?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=scheduledEventId" })
  scheduledEventId: number;

  @Metadata({ data: "json, name=startedEventId" })
  startedEventId: number;
}

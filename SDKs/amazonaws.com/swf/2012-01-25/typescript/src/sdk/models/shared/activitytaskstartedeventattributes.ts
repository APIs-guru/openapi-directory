import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ActivityTaskStartedEventAttributes
/** 
 * Provides the details of the <code>ActivityTaskStarted</code> event.
**/
export class ActivityTaskStartedEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=identity" })
  identity?: string;

  @Metadata({ data: "json, name=scheduledEventId" })
  scheduledEventId: number;
}

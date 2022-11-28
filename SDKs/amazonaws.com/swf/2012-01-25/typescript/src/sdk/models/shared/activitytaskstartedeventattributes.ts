import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActivityTaskStartedEventAttributes
/** 
 * Provides the details of the <code>ActivityTaskStarted</code> event.
**/
export class ActivityTaskStartedEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=identity" })
  identity?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduledEventId" })
  scheduledEventId: number;
}

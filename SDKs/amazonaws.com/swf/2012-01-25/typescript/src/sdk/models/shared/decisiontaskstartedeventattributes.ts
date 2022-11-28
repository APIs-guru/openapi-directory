import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DecisionTaskStartedEventAttributes
/** 
 * Provides the details of the <code>DecisionTaskStarted</code> event.
**/
export class DecisionTaskStartedEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=identity" })
  identity?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduledEventId" })
  scheduledEventId: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DecisionTaskCompletedEventAttributes
/** 
 * Provides the details of the <code>DecisionTaskCompleted</code> event.
**/
export class DecisionTaskCompletedEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executionContext" })
  executionContext?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduledEventId" })
  scheduledEventId: number;

  @SpeakeasyMetadata({ data: "json, name=startedEventId" })
  startedEventId: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DecisionTaskCompletedEventAttributes
/** 
 * Provides the details of the <code>DecisionTaskCompleted</code> event.
**/
export class DecisionTaskCompletedEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=executionContext" })
  executionContext?: string;

  @Metadata({ data: "json, name=scheduledEventId" })
  scheduledEventId: number;

  @Metadata({ data: "json, name=startedEventId" })
  startedEventId: number;
}

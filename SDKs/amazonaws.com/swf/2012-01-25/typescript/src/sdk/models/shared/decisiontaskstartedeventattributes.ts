import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DecisionTaskStartedEventAttributes
/** 
 * Provides the details of the <code>DecisionTaskStarted</code> event.
**/
export class DecisionTaskStartedEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=identity" })
  identity?: string;

  @Metadata({ data: "json, name=scheduledEventId" })
  scheduledEventId: number;
}

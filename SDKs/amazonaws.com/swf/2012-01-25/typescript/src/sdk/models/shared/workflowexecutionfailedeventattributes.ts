import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WorkflowExecutionFailedEventAttributes
/** 
 * Provides the details of the <code>WorkflowExecutionFailed</code> event.
**/
export class WorkflowExecutionFailedEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=decisionTaskCompletedEventId" })
  decisionTaskCompletedEventId: number;

  @Metadata({ data: "json, name=details" })
  details?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;
}

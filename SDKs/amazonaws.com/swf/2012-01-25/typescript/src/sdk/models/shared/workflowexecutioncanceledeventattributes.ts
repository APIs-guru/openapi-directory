import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WorkflowExecutionCanceledEventAttributes
/** 
 * Provides the details of the <code>WorkflowExecutionCanceled</code> event.
**/
export class WorkflowExecutionCanceledEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=decisionTaskCompletedEventId" })
  decisionTaskCompletedEventId: number;

  @Metadata({ data: "json, name=details" })
  details?: string;
}

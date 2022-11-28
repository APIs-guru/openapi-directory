import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WorkflowExecutionCanceledEventAttributes
/** 
 * Provides the details of the <code>WorkflowExecutionCanceled</code> event.
**/
export class WorkflowExecutionCanceledEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=decisionTaskCompletedEventId" })
  decisionTaskCompletedEventId: number;

  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WorkflowExecutionCompletedEventAttributes
/** 
 * Provides the details of the <code>WorkflowExecutionCompleted</code> event.
**/
export class WorkflowExecutionCompletedEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=decisionTaskCompletedEventId" })
  decisionTaskCompletedEventId: number;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WorkflowExecutionCompletedEventAttributes
/** 
 * Provides the details of the <code>WorkflowExecutionCompleted</code> event.
**/
export class WorkflowExecutionCompletedEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=decisionTaskCompletedEventId" })
  decisionTaskCompletedEventId: number;

  @Metadata({ data: "json, name=result" })
  result?: string;
}

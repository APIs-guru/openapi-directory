import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CompleteWorkflowExecutionFailedCauseEnum } from "./completeworkflowexecutionfailedcauseenum";


// CompleteWorkflowExecutionFailedEventAttributes
/** 
 * Provides the details of the <code>CompleteWorkflowExecutionFailed</code> event.
**/
export class CompleteWorkflowExecutionFailedEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=cause" })
  cause: CompleteWorkflowExecutionFailedCauseEnum;

  @Metadata({ data: "json, name=decisionTaskCompletedEventId" })
  decisionTaskCompletedEventId: number;
}

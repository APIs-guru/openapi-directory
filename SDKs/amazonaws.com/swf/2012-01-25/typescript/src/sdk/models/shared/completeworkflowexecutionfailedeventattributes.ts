import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompleteWorkflowExecutionFailedCauseEnum } from "./completeworkflowexecutionfailedcauseenum";



// CompleteWorkflowExecutionFailedEventAttributes
/** 
 * Provides the details of the <code>CompleteWorkflowExecutionFailed</code> event.
**/
export class CompleteWorkflowExecutionFailedEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cause" })
  cause: CompleteWorkflowExecutionFailedCauseEnum;

  @SpeakeasyMetadata({ data: "json, name=decisionTaskCompletedEventId" })
  decisionTaskCompletedEventId: number;
}

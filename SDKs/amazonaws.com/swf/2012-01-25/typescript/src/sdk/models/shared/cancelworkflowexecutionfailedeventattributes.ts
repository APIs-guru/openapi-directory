import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CancelWorkflowExecutionFailedCauseEnum } from "./cancelworkflowexecutionfailedcauseenum";



// CancelWorkflowExecutionFailedEventAttributes
/** 
 * Provides the details of the <code>CancelWorkflowExecutionFailed</code> event.
**/
export class CancelWorkflowExecutionFailedEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cause" })
  cause: CancelWorkflowExecutionFailedCauseEnum;

  @SpeakeasyMetadata({ data: "json, name=decisionTaskCompletedEventId" })
  decisionTaskCompletedEventId: number;
}

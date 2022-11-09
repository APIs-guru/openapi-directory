import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CancelWorkflowExecutionFailedCauseEnum } from "./cancelworkflowexecutionfailedcauseenum";


// CancelWorkflowExecutionFailedEventAttributes
/** 
 * Provides the details of the <code>CancelWorkflowExecutionFailed</code> event.
**/
export class CancelWorkflowExecutionFailedEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=cause" })
  cause: CancelWorkflowExecutionFailedCauseEnum;

  @Metadata({ data: "json, name=decisionTaskCompletedEventId" })
  decisionTaskCompletedEventId: number;
}

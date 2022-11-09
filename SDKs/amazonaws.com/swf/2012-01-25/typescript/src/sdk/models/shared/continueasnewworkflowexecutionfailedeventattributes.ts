import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContinueAsNewWorkflowExecutionFailedCauseEnum } from "./continueasnewworkflowexecutionfailedcauseenum";


// ContinueAsNewWorkflowExecutionFailedEventAttributes
/** 
 * Provides the details of the <code>ContinueAsNewWorkflowExecutionFailed</code> event.
**/
export class ContinueAsNewWorkflowExecutionFailedEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=cause" })
  cause: ContinueAsNewWorkflowExecutionFailedCauseEnum;

  @Metadata({ data: "json, name=decisionTaskCompletedEventId" })
  decisionTaskCompletedEventId: number;
}

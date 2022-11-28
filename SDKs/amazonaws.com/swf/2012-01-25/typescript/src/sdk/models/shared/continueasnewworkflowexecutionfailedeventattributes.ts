import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContinueAsNewWorkflowExecutionFailedCauseEnum } from "./continueasnewworkflowexecutionfailedcauseenum";



// ContinueAsNewWorkflowExecutionFailedEventAttributes
/** 
 * Provides the details of the <code>ContinueAsNewWorkflowExecutionFailed</code> event.
**/
export class ContinueAsNewWorkflowExecutionFailedEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cause" })
  cause: ContinueAsNewWorkflowExecutionFailedCauseEnum;

  @SpeakeasyMetadata({ data: "json, name=decisionTaskCompletedEventId" })
  decisionTaskCompletedEventId: number;
}

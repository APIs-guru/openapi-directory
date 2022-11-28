import { SpeakeasyBase } from "../../../internal/utils";
import { ContinueAsNewWorkflowExecutionFailedCauseEnum } from "./continueasnewworkflowexecutionfailedcauseenum";
/**
 * Provides the details of the <code>ContinueAsNewWorkflowExecutionFailed</code> event.
**/
export declare class ContinueAsNewWorkflowExecutionFailedEventAttributes extends SpeakeasyBase {
    cause: ContinueAsNewWorkflowExecutionFailedCauseEnum;
    decisionTaskCompletedEventId: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { CancelWorkflowExecutionFailedCauseEnum } from "./cancelworkflowexecutionfailedcauseenum";
/**
 * Provides the details of the <code>CancelWorkflowExecutionFailed</code> event.
**/
export declare class CancelWorkflowExecutionFailedEventAttributes extends SpeakeasyBase {
    cause: CancelWorkflowExecutionFailedCauseEnum;
    decisionTaskCompletedEventId: number;
}

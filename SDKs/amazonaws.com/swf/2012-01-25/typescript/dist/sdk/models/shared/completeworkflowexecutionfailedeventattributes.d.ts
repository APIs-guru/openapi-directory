import { SpeakeasyBase } from "../../../internal/utils";
import { CompleteWorkflowExecutionFailedCauseEnum } from "./completeworkflowexecutionfailedcauseenum";
/**
 * Provides the details of the <code>CompleteWorkflowExecutionFailed</code> event.
**/
export declare class CompleteWorkflowExecutionFailedEventAttributes extends SpeakeasyBase {
    cause: CompleteWorkflowExecutionFailedCauseEnum;
    decisionTaskCompletedEventId: number;
}

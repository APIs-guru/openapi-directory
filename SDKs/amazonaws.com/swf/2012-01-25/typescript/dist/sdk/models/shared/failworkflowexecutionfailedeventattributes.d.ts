import { SpeakeasyBase } from "../../../internal/utils";
import { FailWorkflowExecutionFailedCauseEnum } from "./failworkflowexecutionfailedcauseenum";
/**
 * Provides the details of the <code>FailWorkflowExecutionFailed</code> event.
**/
export declare class FailWorkflowExecutionFailedEventAttributes extends SpeakeasyBase {
    cause: FailWorkflowExecutionFailedCauseEnum;
    decisionTaskCompletedEventId: number;
}

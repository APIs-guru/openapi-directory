import { SpeakeasyBase } from "../../../internal/utils";
import { RequestCancelExternalWorkflowExecutionFailedCauseEnum } from "./requestcancelexternalworkflowexecutionfailedcauseenum";
/**
 * Provides the details of the <code>RequestCancelExternalWorkflowExecutionFailed</code> event.
**/
export declare class RequestCancelExternalWorkflowExecutionFailedEventAttributes extends SpeakeasyBase {
    cause: RequestCancelExternalWorkflowExecutionFailedCauseEnum;
    control?: string;
    decisionTaskCompletedEventId: number;
    initiatedEventId: number;
    runId?: string;
    workflowId: string;
}

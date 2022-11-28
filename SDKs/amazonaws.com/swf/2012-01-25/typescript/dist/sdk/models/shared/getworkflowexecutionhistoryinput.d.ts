import { SpeakeasyBase } from "../../../internal/utils";
import { WorkflowExecution } from "./workflowexecution";
export declare class GetWorkflowExecutionHistoryInput extends SpeakeasyBase {
    domain: string;
    execution: WorkflowExecution;
    maximumPageSize?: number;
    nextPageToken?: string;
    reverseOrder?: boolean;
}

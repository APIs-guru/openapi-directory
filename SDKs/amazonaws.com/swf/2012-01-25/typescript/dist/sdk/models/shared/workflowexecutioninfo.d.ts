import { SpeakeasyBase } from "../../../internal/utils";
import { CloseStatusEnum } from "./closestatusenum";
import { WorkflowExecution } from "./workflowexecution";
import { ExecutionStatusEnum } from "./executionstatusenum";
import { WorkflowType } from "./workflowtype";
/**
 * Contains information about a workflow execution.
**/
export declare class WorkflowExecutionInfo extends SpeakeasyBase {
    cancelRequested?: boolean;
    closeStatus?: CloseStatusEnum;
    closeTimestamp?: Date;
    execution: WorkflowExecution;
    executionStatus: ExecutionStatusEnum;
    parent?: WorkflowExecution;
    startTimestamp: Date;
    tagList?: string[];
    workflowType: WorkflowType;
}

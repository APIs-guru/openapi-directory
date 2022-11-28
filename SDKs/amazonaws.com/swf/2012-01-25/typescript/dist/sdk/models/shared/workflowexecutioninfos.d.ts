import { SpeakeasyBase } from "../../../internal/utils";
import { WorkflowExecutionInfo } from "./workflowexecutioninfo";
/**
 * Contains a paginated list of information about workflow executions.
**/
export declare class WorkflowExecutionInfos extends SpeakeasyBase {
    executionInfos: WorkflowExecutionInfo[];
    nextPageToken?: string;
}

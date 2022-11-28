import { SpeakeasyBase } from "../../../internal/utils";
import { WorkflowExecutionFilter } from "./workflowexecutionfilter";
import { ExecutionTimeFilter } from "./executiontimefilter";
import { TagFilter } from "./tagfilter";
import { WorkflowTypeFilter } from "./workflowtypefilter";
export declare class CountOpenWorkflowExecutionsInput extends SpeakeasyBase {
    domain: string;
    executionFilter?: WorkflowExecutionFilter;
    startTimeFilter: ExecutionTimeFilter;
    tagFilter?: TagFilter;
    typeFilter?: WorkflowTypeFilter;
}

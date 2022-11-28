import { SpeakeasyBase } from "../../../internal/utils";
import { WorkflowExecution } from "./workflowexecution";
export declare class DescribeWorkflowExecutionInput extends SpeakeasyBase {
    domain: string;
    execution: WorkflowExecution;
}

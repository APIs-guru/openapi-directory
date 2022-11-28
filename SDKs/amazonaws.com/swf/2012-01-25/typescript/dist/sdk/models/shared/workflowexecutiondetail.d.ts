import { SpeakeasyBase } from "../../../internal/utils";
import { WorkflowExecutionConfiguration } from "./workflowexecutionconfiguration";
import { WorkflowExecutionInfo } from "./workflowexecutioninfo";
import { WorkflowExecutionOpenCounts } from "./workflowexecutionopencounts";
/**
 * Contains details about a workflow execution.
**/
export declare class WorkflowExecutionDetail extends SpeakeasyBase {
    executionConfiguration: WorkflowExecutionConfiguration;
    executionInfo: WorkflowExecutionInfo;
    latestActivityTaskTimestamp?: Date;
    latestExecutionContext?: string;
    openCounts: WorkflowExecutionOpenCounts;
}

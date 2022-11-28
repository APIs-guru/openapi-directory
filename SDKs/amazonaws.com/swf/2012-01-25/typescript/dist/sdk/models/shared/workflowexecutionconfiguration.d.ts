import { SpeakeasyBase } from "../../../internal/utils";
import { ChildPolicyEnum } from "./childpolicyenum";
import { TaskList } from "./tasklist";
/**
 * The configuration settings for a workflow execution including timeout values, tasklist etc. These configuration settings are determined from the defaults specified when registering the workflow type and those specified when starting the workflow execution.
**/
export declare class WorkflowExecutionConfiguration extends SpeakeasyBase {
    childPolicy: ChildPolicyEnum;
    executionStartToCloseTimeout: string;
    lambdaRole?: string;
    taskList: TaskList;
    taskPriority?: string;
    taskStartToCloseTimeout: string;
}

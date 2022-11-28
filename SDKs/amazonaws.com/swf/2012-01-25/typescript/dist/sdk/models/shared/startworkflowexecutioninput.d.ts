import { SpeakeasyBase } from "../../../internal/utils";
import { ChildPolicyEnum } from "./childpolicyenum";
import { TaskList } from "./tasklist";
import { WorkflowType } from "./workflowtype";
export declare class StartWorkflowExecutionInput extends SpeakeasyBase {
    childPolicy?: ChildPolicyEnum;
    domain: string;
    executionStartToCloseTimeout?: string;
    input?: string;
    lambdaRole?: string;
    tagList?: string[];
    taskList?: TaskList;
    taskPriority?: string;
    taskStartToCloseTimeout?: string;
    workflowId: string;
    workflowType: WorkflowType;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { ChildPolicyEnum } from "./childpolicyenum";
import { TaskList } from "./tasklist";
import { WorkflowType } from "./workflowtype";
/**
 * Provides the details of the <code>StartChildWorkflowExecutionInitiated</code> event.
**/
export declare class StartChildWorkflowExecutionInitiatedEventAttributes extends SpeakeasyBase {
    childPolicy: ChildPolicyEnum;
    control?: string;
    decisionTaskCompletedEventId: number;
    executionStartToCloseTimeout?: string;
    input?: string;
    lambdaRole?: string;
    tagList?: string[];
    taskList: TaskList;
    taskPriority?: string;
    taskStartToCloseTimeout?: string;
    workflowId: string;
    workflowType: WorkflowType;
}

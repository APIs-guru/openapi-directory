import { SpeakeasyBase } from "../../../internal/utils";
import { ChildPolicyEnum } from "./childpolicyenum";
import { TaskList } from "./tasklist";
import { WorkflowType } from "./workflowtype";
/**
 * Provides the details of the <code>WorkflowExecutionContinuedAsNew</code> event.
**/
export declare class WorkflowExecutionContinuedAsNewEventAttributes extends SpeakeasyBase {
    childPolicy: ChildPolicyEnum;
    decisionTaskCompletedEventId: number;
    executionStartToCloseTimeout?: string;
    input?: string;
    lambdaRole?: string;
    newExecutionRunId: string;
    tagList?: string[];
    taskList: TaskList;
    taskPriority?: string;
    taskStartToCloseTimeout?: string;
    workflowType: WorkflowType;
}

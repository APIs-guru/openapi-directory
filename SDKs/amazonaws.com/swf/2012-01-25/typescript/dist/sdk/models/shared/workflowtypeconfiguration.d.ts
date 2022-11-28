import { SpeakeasyBase } from "../../../internal/utils";
import { ChildPolicyEnum } from "./childpolicyenum";
import { TaskList } from "./tasklist";
/**
 * The configuration settings of a workflow type.
**/
export declare class WorkflowTypeConfiguration extends SpeakeasyBase {
    defaultChildPolicy?: ChildPolicyEnum;
    defaultExecutionStartToCloseTimeout?: string;
    defaultLambdaRole?: string;
    defaultTaskList?: TaskList;
    defaultTaskPriority?: string;
    defaultTaskStartToCloseTimeout?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { ChildPolicyEnum } from "./childpolicyenum";
import { TaskList } from "./tasklist";
export declare class RegisterWorkflowTypeInput extends SpeakeasyBase {
    defaultChildPolicy?: ChildPolicyEnum;
    defaultExecutionStartToCloseTimeout?: string;
    defaultLambdaRole?: string;
    defaultTaskList?: TaskList;
    defaultTaskPriority?: string;
    defaultTaskStartToCloseTimeout?: string;
    description?: string;
    domain: string;
    name: string;
    version: string;
}

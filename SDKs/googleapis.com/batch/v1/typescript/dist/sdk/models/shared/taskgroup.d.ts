import { SpeakeasyBase } from "../../../internal/utils";
import { Environment } from "./environment";
import { TaskSpec } from "./taskspec";
/**
 * A TaskGroup contains one or multiple Tasks that share the same Runnable but with different runtime parameters.
**/
export declare class TaskGroup extends SpeakeasyBase {
    name?: string;
    parallelism?: string;
    permissiveSsh?: boolean;
    requireHostsFile?: boolean;
    taskCount?: string;
    taskCountPerNode?: string;
    taskEnvironments?: Environment[];
    taskSpec?: TaskSpec;
}
/**
 * A TaskGroup contains one or multiple Tasks that share the same Runnable but with different runtime parameters.
**/
export declare class TaskGroupInput extends SpeakeasyBase {
    parallelism?: string;
    permissiveSsh?: boolean;
    requireHostsFile?: boolean;
    taskCount?: string;
    taskCountPerNode?: string;
    taskEnvironments?: Environment[];
    taskSpec?: TaskSpec;
}

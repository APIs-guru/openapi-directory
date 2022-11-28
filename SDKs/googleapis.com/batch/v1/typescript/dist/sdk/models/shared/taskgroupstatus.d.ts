import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceStatus } from "./instancestatus";
/**
 * Aggregated task status for a TaskGroup.
**/
export declare class TaskGroupStatus extends SpeakeasyBase {
    counts?: Map<string, string>;
    instances?: InstanceStatus[];
}

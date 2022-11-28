import { SpeakeasyBase } from "../../../internal/utils";
import { TaskStatus } from "./taskstatus";
/**
 * A Cloud Batch task.
**/
export declare class Task extends SpeakeasyBase {
    name?: string;
    status?: TaskStatus;
}

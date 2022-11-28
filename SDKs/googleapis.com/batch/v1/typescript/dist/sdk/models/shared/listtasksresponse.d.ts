import { SpeakeasyBase } from "../../../internal/utils";
import { Task } from "./task";
/**
 * ListTasks Response.
**/
export declare class ListTasksResponse extends SpeakeasyBase {
    nextPageToken?: string;
    tasks?: Task[];
    unreachable?: string[];
}

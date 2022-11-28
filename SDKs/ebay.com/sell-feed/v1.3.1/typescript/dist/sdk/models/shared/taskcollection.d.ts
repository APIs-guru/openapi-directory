import { SpeakeasyBase } from "../../../internal/utils";
import { Task } from "./task";
/**
 * The type that defines the fields for a paginated result set of tasks. The response consists of 0 or more sequenced pages where each page has 0 or more items.
**/
export declare class TaskCollection extends SpeakeasyBase {
    href?: string;
    limit?: number;
    next?: string;
    offset?: number;
    prev?: string;
    tasks?: Task[];
    total?: number;
}

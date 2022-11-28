import { SpeakeasyBase } from "../../../internal/utils";
import { UserItem } from "./useritem";
import { Range } from "./range";
/**
 * List of users
**/
export declare class UserList extends SpeakeasyBase {
    items: UserItem[];
    range: Range;
}

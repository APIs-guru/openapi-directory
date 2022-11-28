import { SpeakeasyBase } from "../../../internal/utils";
import { RoleUser } from "./roleuser";
import { Range } from "./range";
/**
 * List of users with assigned role
**/
export declare class RoleUserList extends SpeakeasyBase {
    items: RoleUser[];
    range: Range;
}

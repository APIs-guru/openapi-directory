import { SpeakeasyBase } from "../../../internal/utils";
import { RoleGroup } from "./rolegroup";
import { Range } from "./range";
/**
 * List of groups with assigned role
**/
export declare class RoleGroupList extends SpeakeasyBase {
    items: RoleGroup[];
    range: Range;
}

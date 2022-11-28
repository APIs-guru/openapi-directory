import { SpeakeasyBase } from "../../../internal/utils";
import { RoomUserOutput } from "./roomuser";
import { Range } from "./range";
/**
 * List of users
**/
export declare class RoomUserListOutput extends SpeakeasyBase {
    items: RoomUserOutput[];
    range: Range;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { Comment } from "./comment";
import { Range } from "./range";
/**
 * List of node comments
**/
export declare class CommentList extends SpeakeasyBase {
    items: Comment[];
    range: Range;
}

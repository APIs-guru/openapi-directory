import { SpeakeasyBase } from "../../../internal/utils";
import { Comment } from "./comment";
import { BoardCommentPermissions } from "./boardcommentpermissions";
export declare class CommentsList extends SpeakeasyBase {
    comments?: Comment[];
    permissions?: BoardCommentPermissions;
}

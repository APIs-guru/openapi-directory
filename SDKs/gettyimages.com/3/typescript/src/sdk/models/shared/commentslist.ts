import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Comment } from "./comment";
import { BoardCommentPermissions } from "./boardcommentpermissions";



export class CommentsList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comments", elemType: Comment })
  comments?: Comment[];

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: BoardCommentPermissions;
}

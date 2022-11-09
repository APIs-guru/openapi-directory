import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Comment } from "./comment";
import { BoardCommentPermissions } from "./boardcommentpermissions";


export class CommentsList extends SpeakeasyBase {
  @Metadata({ data: "json, name=comments", elemType: shared.Comment })
  comments?: Comment[];

  @Metadata({ data: "json, name=permissions" })
  permissions?: BoardCommentPermissions;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BoardCommentPermissions extends SpeakeasyBase {
  @Metadata({ data: "json, name=can_add_comment" })
  canAddComment?: boolean;
}

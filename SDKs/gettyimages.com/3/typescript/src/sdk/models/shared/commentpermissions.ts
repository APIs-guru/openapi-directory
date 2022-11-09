import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CommentPermissions extends SpeakeasyBase {
  @Metadata({ data: "json, name=can_delete_comment" })
  canDeleteComment?: boolean;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CommentPermissions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=can_delete_comment" })
  canDeleteComment?: boolean;
}

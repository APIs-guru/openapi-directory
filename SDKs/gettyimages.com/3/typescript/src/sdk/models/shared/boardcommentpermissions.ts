import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BoardCommentPermissions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=can_add_comment" })
  canAddComment?: boolean;
}

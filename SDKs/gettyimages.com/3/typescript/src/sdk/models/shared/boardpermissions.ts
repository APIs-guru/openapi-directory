import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BoardPermissions extends SpeakeasyBase {
  @Metadata({ data: "json, name=can_add_assets" })
  canAddAssets?: boolean;

  @Metadata({ data: "json, name=can_delete_board" })
  canDeleteBoard?: boolean;

  @Metadata({ data: "json, name=can_invite_to_board" })
  canInviteToBoard?: boolean;

  @Metadata({ data: "json, name=can_remove_assets" })
  canRemoveAssets?: boolean;

  @Metadata({ data: "json, name=can_update_description" })
  canUpdateDescription?: boolean;

  @Metadata({ data: "json, name=can_update_name" })
  canUpdateName?: boolean;
}

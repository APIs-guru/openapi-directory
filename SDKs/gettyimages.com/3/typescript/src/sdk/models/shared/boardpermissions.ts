import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BoardPermissions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=can_add_assets" })
  canAddAssets?: boolean;

  @SpeakeasyMetadata({ data: "json, name=can_delete_board" })
  canDeleteBoard?: boolean;

  @SpeakeasyMetadata({ data: "json, name=can_invite_to_board" })
  canInviteToBoard?: boolean;

  @SpeakeasyMetadata({ data: "json, name=can_remove_assets" })
  canRemoveAssets?: boolean;

  @SpeakeasyMetadata({ data: "json, name=can_update_description" })
  canUpdateDescription?: boolean;

  @SpeakeasyMetadata({ data: "json, name=can_update_name" })
  canUpdateName?: boolean;
}

package shared

type BoardPermissions struct {
	CanAddAssets         *bool `json:"can_add_assets"`
	CanDeleteBoard       *bool `json:"can_delete_board"`
	CanInviteToBoard     *bool `json:"can_invite_to_board"`
	CanRemoveAssets      *bool `json:"can_remove_assets"`
	CanUpdateDescription *bool `json:"can_update_description"`
	CanUpdateName        *bool `json:"can_update_name"`
}

package shared



type BoardPermissions struct {
    CanAddAssets *bool `json:"can_add_assets,omitempty"`
    CanDeleteBoard *bool `json:"can_delete_board,omitempty"`
    CanInviteToBoard *bool `json:"can_invite_to_board,omitempty"`
    CanRemoveAssets *bool `json:"can_remove_assets,omitempty"`
    CanUpdateDescription *bool `json:"can_update_description,omitempty"`
    CanUpdateName *bool `json:"can_update_name,omitempty"`
    
}


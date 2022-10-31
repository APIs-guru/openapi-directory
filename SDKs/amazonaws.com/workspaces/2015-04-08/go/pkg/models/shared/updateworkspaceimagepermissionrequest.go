package shared



type UpdateWorkspaceImagePermissionRequest struct {
    AllowCopyImage bool `json:"AllowCopyImage"`
    ImageID string `json:"ImageId"`
    SharedAccountID string `json:"SharedAccountId"`
    
}


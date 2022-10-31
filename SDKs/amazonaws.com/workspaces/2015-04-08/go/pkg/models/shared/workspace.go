package shared



type Workspace struct {
    BundleID *string `json:"BundleId,omitempty"`
    ComputerName *string `json:"ComputerName,omitempty"`
    DirectoryID *string `json:"DirectoryId,omitempty"`
    ErrorCode *string `json:"ErrorCode,omitempty"`
    ErrorMessage *string `json:"ErrorMessage,omitempty"`
    IPAddress *string `json:"IpAddress,omitempty"`
    ModificationStates []ModificationState `json:"ModificationStates,omitempty"`
    RootVolumeEncryptionEnabled *bool `json:"RootVolumeEncryptionEnabled,omitempty"`
    State *WorkspaceStateEnum `json:"State,omitempty"`
    SubnetID *string `json:"SubnetId,omitempty"`
    UserName *string `json:"UserName,omitempty"`
    UserVolumeEncryptionEnabled *bool `json:"UserVolumeEncryptionEnabled,omitempty"`
    VolumeEncryptionKey *string `json:"VolumeEncryptionKey,omitempty"`
    WorkspaceID *string `json:"WorkspaceId,omitempty"`
    WorkspaceProperties *WorkspaceProperties `json:"WorkspaceProperties,omitempty"`
    
}


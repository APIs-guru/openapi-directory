package shared

type Workspace struct {
	BundleID                    *string              `json:"BundleId"`
	ComputerName                *string              `json:"ComputerName"`
	DirectoryID                 *string              `json:"DirectoryId"`
	ErrorCode                   *string              `json:"ErrorCode"`
	ErrorMessage                *string              `json:"ErrorMessage"`
	IPAddress                   *string              `json:"IpAddress"`
	ModificationStates          []ModificationState  `json:"ModificationStates"`
	RootVolumeEncryptionEnabled *bool                `json:"RootVolumeEncryptionEnabled"`
	State                       *WorkspaceStateEnum  `json:"State"`
	SubnetID                    *string              `json:"SubnetId"`
	UserName                    *string              `json:"UserName"`
	UserVolumeEncryptionEnabled *bool                `json:"UserVolumeEncryptionEnabled"`
	VolumeEncryptionKey         *string              `json:"VolumeEncryptionKey"`
	WorkspaceID                 *string              `json:"WorkspaceId"`
	WorkspaceProperties         *WorkspaceProperties `json:"WorkspaceProperties"`
}

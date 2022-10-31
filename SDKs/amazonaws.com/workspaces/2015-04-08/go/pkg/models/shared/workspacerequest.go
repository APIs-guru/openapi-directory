package shared

type WorkspaceRequest struct {
	BundleID                    string               `json:"BundleId"`
	DirectoryID                 string               `json:"DirectoryId"`
	RootVolumeEncryptionEnabled *bool                `json:"RootVolumeEncryptionEnabled,omitempty"`
	Tags                        []Tag                `json:"Tags,omitempty"`
	UserName                    string               `json:"UserName"`
	UserVolumeEncryptionEnabled *bool                `json:"UserVolumeEncryptionEnabled,omitempty"`
	VolumeEncryptionKey         *string              `json:"VolumeEncryptionKey,omitempty"`
	WorkspaceProperties         *WorkspaceProperties `json:"WorkspaceProperties,omitempty"`
}

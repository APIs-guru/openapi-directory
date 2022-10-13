package shared

type WorkspaceRequest struct {
	BundleID                    string               `json:"BundleId"`
	DirectoryID                 string               `json:"DirectoryId"`
	RootVolumeEncryptionEnabled *bool                `json:"RootVolumeEncryptionEnabled"`
	Tags                        []Tag                `json:"Tags"`
	UserName                    string               `json:"UserName"`
	UserVolumeEncryptionEnabled *bool                `json:"UserVolumeEncryptionEnabled"`
	VolumeEncryptionKey         *string              `json:"VolumeEncryptionKey"`
	WorkspaceProperties         *WorkspaceProperties `json:"WorkspaceProperties"`
}

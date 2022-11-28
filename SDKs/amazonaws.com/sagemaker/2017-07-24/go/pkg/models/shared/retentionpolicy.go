package shared

// RetentionPolicy
// The retention policy for data stored on an Amazon Elastic File System (EFS) volume.
type RetentionPolicy struct {
	HomeEfsFileSystem *RetentionTypeEnum `json:"HomeEfsFileSystem,omitempty"`
}

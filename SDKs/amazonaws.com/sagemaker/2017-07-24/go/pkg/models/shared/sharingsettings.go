package shared

// SharingSettings
// Specifies options for sharing SageMaker Studio notebooks. These settings are specified as part of <code>DefaultUserSettings</code> when the <code>CreateDomain</code> API is called, and as part of <code>UserSettings</code> when the <code>CreateUserProfile</code> API is called. When <code>SharingSettings</code> is not specified, notebook sharing isn't allowed.
type SharingSettings struct {
	NotebookOutputOption *NotebookOutputOptionEnum `json:"NotebookOutputOption,omitempty"`
	S3KmsKeyID           *string                   `json:"S3KmsKeyId,omitempty"`
	S3OutputPath         *string                   `json:"S3OutputPath,omitempty"`
}

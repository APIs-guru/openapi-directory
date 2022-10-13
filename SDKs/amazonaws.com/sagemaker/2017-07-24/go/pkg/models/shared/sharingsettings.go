package shared

type SharingSettings struct {
	NotebookOutputOption *NotebookOutputOptionEnum `json:"NotebookOutputOption"`
	S3KmsKeyID           *string                   `json:"S3KmsKeyId"`
	S3OutputPath         *string                   `json:"S3OutputPath"`
}

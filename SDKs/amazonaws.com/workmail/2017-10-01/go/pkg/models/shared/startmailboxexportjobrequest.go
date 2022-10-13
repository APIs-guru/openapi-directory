package shared

type StartMailboxExportJobRequest struct {
	ClientToken    string  `json:"ClientToken"`
	Description    *string `json:"Description"`
	EntityID       string  `json:"EntityId"`
	KmsKeyArn      string  `json:"KmsKeyArn"`
	OrganizationID string  `json:"OrganizationId"`
	RoleArn        string  `json:"RoleArn"`
	S3BucketName   string  `json:"S3BucketName"`
	S3Prefix       string  `json:"S3Prefix"`
}

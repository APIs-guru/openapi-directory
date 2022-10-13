package shared

type S3ReferenceDataSourceUpdate struct {
	BucketArnUpdate        *string `json:"BucketARNUpdate"`
	FileKeyUpdate          *string `json:"FileKeyUpdate"`
	ReferenceRoleArnUpdate *string `json:"ReferenceRoleARNUpdate"`
}

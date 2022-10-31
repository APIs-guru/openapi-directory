package shared



type S3ReferenceDataSourceUpdate struct {
    BucketArnUpdate *string `json:"BucketARNUpdate,omitempty"`
    FileKeyUpdate *string `json:"FileKeyUpdate,omitempty"`
    ReferenceRoleArnUpdate *string `json:"ReferenceRoleARNUpdate,omitempty"`
    
}


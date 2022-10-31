package shared



type UpdateBucketRequest struct {
    AccessRules *AccessRules `json:"accessRules,omitempty"`
    BucketName string `json:"bucketName"`
    ReadonlyAccessAccounts []string `json:"readonlyAccessAccounts,omitempty"`
    Versioning *string `json:"versioning,omitempty"`
    
}


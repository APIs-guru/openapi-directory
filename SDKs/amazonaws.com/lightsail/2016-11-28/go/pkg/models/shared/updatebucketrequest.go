package shared

type UpdateBucketRequest struct {
	AccessRules            *AccessRules `json:"accessRules"`
	BucketName             string       `json:"bucketName"`
	ReadonlyAccessAccounts []string     `json:"readonlyAccessAccounts"`
	Versioning             *string      `json:"versioning"`
}

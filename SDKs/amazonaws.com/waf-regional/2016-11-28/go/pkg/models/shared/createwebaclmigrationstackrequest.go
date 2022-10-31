package shared

type CreateWebACLMigrationStackRequest struct {
	IgnoreUnsupportedType bool   `json:"IgnoreUnsupportedType"`
	S3BucketName          string `json:"S3BucketName"`
	WebACLID              string `json:"WebACLId"`
}

package shared

type AwsS3BucketServerSideEncryptionConfiguration struct {
	Rules []AwsS3BucketServerSideEncryptionRule `json:"Rules,omitempty"`
}

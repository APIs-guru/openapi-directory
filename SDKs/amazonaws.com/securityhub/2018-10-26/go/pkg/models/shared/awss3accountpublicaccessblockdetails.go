package shared

// AwsS3AccountPublicAccessBlockDetails
// provides information about the Amazon S3 Public Access Block configuration for accounts.
type AwsS3AccountPublicAccessBlockDetails struct {
	BlockPublicAcls       *bool `json:"BlockPublicAcls,omitempty"`
	BlockPublicPolicy     *bool `json:"BlockPublicPolicy,omitempty"`
	IgnorePublicAcls      *bool `json:"IgnorePublicAcls,omitempty"`
	RestrictPublicBuckets *bool `json:"RestrictPublicBuckets,omitempty"`
}

package shared

type AwsS3AccountPublicAccessBlockDetails struct {
	BlockPublicAcls       *bool `json:"BlockPublicAcls"`
	BlockPublicPolicy     *bool `json:"BlockPublicPolicy"`
	IgnorePublicAcls      *bool `json:"IgnorePublicAcls"`
	RestrictPublicBuckets *bool `json:"RestrictPublicBuckets"`
}

package shared

type AwsElbLoadBalancerAccessLog struct {
	EmitInterval   *int64  `json:"EmitInterval"`
	Enabled        *bool   `json:"Enabled"`
	S3BucketName   *string `json:"S3BucketName"`
	S3BucketPrefix *string `json:"S3BucketPrefix"`
}

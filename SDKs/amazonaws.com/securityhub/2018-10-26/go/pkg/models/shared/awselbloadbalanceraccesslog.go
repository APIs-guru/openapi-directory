package shared

// AwsElbLoadBalancerAccessLog
// Contains information about the access log configuration for the load balancer.
type AwsElbLoadBalancerAccessLog struct {
	EmitInterval   *int64  `json:"EmitInterval,omitempty"`
	Enabled        *bool   `json:"Enabled,omitempty"`
	S3BucketName   *string `json:"S3BucketName,omitempty"`
	S3BucketPrefix *string `json:"S3BucketPrefix,omitempty"`
}

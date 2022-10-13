package shared

type AwsAPIGatewayStageDetails struct {
	AccessLogSettings    *AwsAPIGatewayAccessLogSettings `json:"AccessLogSettings"`
	CacheClusterEnabled  *bool                           `json:"CacheClusterEnabled"`
	CacheClusterSize     *string                         `json:"CacheClusterSize"`
	CacheClusterStatus   *string                         `json:"CacheClusterStatus"`
	CanarySettings       *AwsAPIGatewayCanarySettings    `json:"CanarySettings"`
	ClientCertificateID  *string                         `json:"ClientCertificateId"`
	CreatedDate          *string                         `json:"CreatedDate"`
	DeploymentID         *string                         `json:"DeploymentId"`
	Description          *string                         `json:"Description"`
	DocumentationVersion *string                         `json:"DocumentationVersion"`
	LastUpdatedDate      *string                         `json:"LastUpdatedDate"`
	MethodSettings       []AwsAPIGatewayMethodSettings   `json:"MethodSettings"`
	StageName            *string                         `json:"StageName"`
	TracingEnabled       *bool                           `json:"TracingEnabled"`
	Variables            map[string]string               `json:"Variables"`
	WebACLArn            *string                         `json:"WebAclArn"`
}

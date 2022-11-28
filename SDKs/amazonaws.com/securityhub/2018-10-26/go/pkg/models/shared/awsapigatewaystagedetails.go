package shared

// AwsAPIGatewayStageDetails
// Provides information about a version 1 Amazon API Gateway stage.
type AwsAPIGatewayStageDetails struct {
	AccessLogSettings    *AwsAPIGatewayAccessLogSettings `json:"AccessLogSettings,omitempty"`
	CacheClusterEnabled  *bool                           `json:"CacheClusterEnabled,omitempty"`
	CacheClusterSize     *string                         `json:"CacheClusterSize,omitempty"`
	CacheClusterStatus   *string                         `json:"CacheClusterStatus,omitempty"`
	CanarySettings       *AwsAPIGatewayCanarySettings    `json:"CanarySettings,omitempty"`
	ClientCertificateID  *string                         `json:"ClientCertificateId,omitempty"`
	CreatedDate          *string                         `json:"CreatedDate,omitempty"`
	DeploymentID         *string                         `json:"DeploymentId,omitempty"`
	Description          *string                         `json:"Description,omitempty"`
	DocumentationVersion *string                         `json:"DocumentationVersion,omitempty"`
	LastUpdatedDate      *string                         `json:"LastUpdatedDate,omitempty"`
	MethodSettings       []AwsAPIGatewayMethodSettings   `json:"MethodSettings,omitempty"`
	StageName            *string                         `json:"StageName,omitempty"`
	TracingEnabled       *bool                           `json:"TracingEnabled,omitempty"`
	Variables            map[string]string               `json:"Variables,omitempty"`
	WebACLArn            *string                         `json:"WebAclArn,omitempty"`
}

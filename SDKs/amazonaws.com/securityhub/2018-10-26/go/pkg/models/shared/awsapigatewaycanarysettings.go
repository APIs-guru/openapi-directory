package shared

// AwsAPIGatewayCanarySettings
// Contains information about settings for canary deployment in the stage.
type AwsAPIGatewayCanarySettings struct {
	DeploymentID           *string           `json:"DeploymentId,omitempty"`
	PercentTraffic         *float64          `json:"PercentTraffic,omitempty"`
	StageVariableOverrides map[string]string `json:"StageVariableOverrides,omitempty"`
	UseStageCache          *bool             `json:"UseStageCache,omitempty"`
}

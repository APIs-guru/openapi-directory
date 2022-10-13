package shared

type AwsAPIGatewayCanarySettings struct {
	DeploymentID           *string           `json:"DeploymentId"`
	PercentTraffic         *float64          `json:"PercentTraffic"`
	StageVariableOverrides map[string]string `json:"StageVariableOverrides"`
	UseStageCache          *bool             `json:"UseStageCache"`
}

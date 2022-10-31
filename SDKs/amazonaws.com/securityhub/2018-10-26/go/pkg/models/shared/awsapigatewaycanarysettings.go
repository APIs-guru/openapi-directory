package shared



type AwsAPIGatewayCanarySettings struct {
    DeploymentID *string `json:"DeploymentId,omitempty"`
    PercentTraffic *float64 `json:"PercentTraffic,omitempty"`
    StageVariableOverrides map[string]string `json:"StageVariableOverrides,omitempty"`
    UseStageCache *bool `json:"UseStageCache,omitempty"`
    
}


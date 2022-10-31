package shared



type AwsAPIGatewayV2StageDetails struct {
    AccessLogSettings *AwsAPIGatewayAccessLogSettings `json:"AccessLogSettings,omitempty"`
    APIGatewayManaged *bool `json:"ApiGatewayManaged,omitempty"`
    AutoDeploy *bool `json:"AutoDeploy,omitempty"`
    ClientCertificateID *string `json:"ClientCertificateId,omitempty"`
    CreatedDate *string `json:"CreatedDate,omitempty"`
    DefaultRouteSettings *AwsAPIGatewayV2RouteSettings `json:"DefaultRouteSettings,omitempty"`
    DeploymentID *string `json:"DeploymentId,omitempty"`
    Description *string `json:"Description,omitempty"`
    LastDeploymentStatusMessage *string `json:"LastDeploymentStatusMessage,omitempty"`
    LastUpdatedDate *string `json:"LastUpdatedDate,omitempty"`
    RouteSettings *AwsAPIGatewayV2RouteSettings `json:"RouteSettings,omitempty"`
    StageName *string `json:"StageName,omitempty"`
    StageVariables map[string]string `json:"StageVariables,omitempty"`
    
}


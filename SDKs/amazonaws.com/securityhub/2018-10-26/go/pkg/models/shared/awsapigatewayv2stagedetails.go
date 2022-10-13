package shared

type AwsAPIGatewayV2StageDetails struct {
	AccessLogSettings           *AwsAPIGatewayAccessLogSettings `json:"AccessLogSettings"`
	APIGatewayManaged           *bool                           `json:"ApiGatewayManaged"`
	AutoDeploy                  *bool                           `json:"AutoDeploy"`
	ClientCertificateID         *string                         `json:"ClientCertificateId"`
	CreatedDate                 *string                         `json:"CreatedDate"`
	DefaultRouteSettings        *AwsAPIGatewayV2RouteSettings   `json:"DefaultRouteSettings"`
	DeploymentID                *string                         `json:"DeploymentId"`
	Description                 *string                         `json:"Description"`
	LastDeploymentStatusMessage *string                         `json:"LastDeploymentStatusMessage"`
	LastUpdatedDate             *string                         `json:"LastUpdatedDate"`
	RouteSettings               *AwsAPIGatewayV2RouteSettings   `json:"RouteSettings"`
	StageName                   *string                         `json:"StageName"`
	StageVariables              map[string]string               `json:"StageVariables"`
}

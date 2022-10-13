package shared

type GoogleCloudApigeeV1DeploymentChangeReportRoutingChange struct {
	Description           *string                                                     `json:"description"`
	EnvironmentGroup      *string                                                     `json:"environmentGroup"`
	FromDeployment        *GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment `json:"fromDeployment"`
	ShouldSequenceRollout *bool                                                       `json:"shouldSequenceRollout"`
	ToDeployment          *GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment `json:"toDeployment"`
}

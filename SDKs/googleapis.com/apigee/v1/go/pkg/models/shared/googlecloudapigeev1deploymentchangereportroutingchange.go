package shared

type GoogleCloudApigeeV1DeploymentChangeReportRoutingChange struct {
	Description           *string                                                     `json:"description,omitempty"`
	EnvironmentGroup      *string                                                     `json:"environmentGroup,omitempty"`
	FromDeployment        *GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment `json:"fromDeployment,omitempty"`
	ShouldSequenceRollout *bool                                                       `json:"shouldSequenceRollout,omitempty"`
	ToDeployment          *GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment `json:"toDeployment,omitempty"`
}

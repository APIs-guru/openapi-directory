package shared

// GoogleCloudApigeeV1DeploymentChangeReportRoutingChange
// Describes a potential routing change that may occur as a result of some deployment operation.
type GoogleCloudApigeeV1DeploymentChangeReportRoutingChange struct {
	Description           *string                                                     `json:"description,omitempty"`
	EnvironmentGroup      *string                                                     `json:"environmentGroup,omitempty"`
	FromDeployment        *GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment `json:"fromDeployment,omitempty"`
	ShouldSequenceRollout *bool                                                       `json:"shouldSequenceRollout,omitempty"`
	ToDeployment          *GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment `json:"toDeployment,omitempty"`
}

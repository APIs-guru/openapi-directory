package shared

// GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict
// Describes a routing conflict that may cause a deployment not to receive traffic at some base path.
type GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict struct {
	ConflictingDeployment *GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment `json:"conflictingDeployment,omitempty"`
	Description           *string                                                     `json:"description,omitempty"`
	EnvironmentGroup      *string                                                     `json:"environmentGroup,omitempty"`
}

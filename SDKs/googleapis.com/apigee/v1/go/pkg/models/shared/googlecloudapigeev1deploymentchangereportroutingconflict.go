package shared

type GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict struct {
	ConflictingDeployment *GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment `json:"conflictingDeployment"`
	Description           *string                                                     `json:"description"`
	EnvironmentGroup      *string                                                     `json:"environmentGroup"`
}

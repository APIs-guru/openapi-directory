package shared

type GoogleCloudApigeeV1DeploymentChangeReport struct {
	RoutingChanges   []GoogleCloudApigeeV1DeploymentChangeReportRoutingChange   `json:"routingChanges"`
	RoutingConflicts []GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict `json:"routingConflicts"`
	ValidationErrors *GoogleRPCPreconditionFailure                              `json:"validationErrors"`
}

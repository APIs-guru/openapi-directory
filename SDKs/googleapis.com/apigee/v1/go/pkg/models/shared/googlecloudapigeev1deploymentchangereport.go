package shared

type GoogleCloudApigeeV1DeploymentChangeReport struct {
	RoutingChanges   []GoogleCloudApigeeV1DeploymentChangeReportRoutingChange   `json:"routingChanges,omitempty"`
	RoutingConflicts []GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict `json:"routingConflicts,omitempty"`
	ValidationErrors *GoogleRPCPreconditionFailure                              `json:"validationErrors,omitempty"`
}

package shared

// GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment
// Tuple representing a base path and the deployment containing it.
type GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment struct {
	APIProxy    *string `json:"apiProxy,omitempty"`
	Basepath    *string `json:"basepath,omitempty"`
	Environment *string `json:"environment,omitempty"`
	Revision    *string `json:"revision,omitempty"`
}

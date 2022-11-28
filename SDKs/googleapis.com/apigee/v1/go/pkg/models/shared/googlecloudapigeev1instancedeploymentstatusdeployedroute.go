package shared

// GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute
// Route deployed in the ingress routing table.
type GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute struct {
	Basepath    *string `json:"basepath,omitempty"`
	Envgroup    *string `json:"envgroup,omitempty"`
	Environment *string `json:"environment,omitempty"`
	Percentage  *int32  `json:"percentage,omitempty"`
}

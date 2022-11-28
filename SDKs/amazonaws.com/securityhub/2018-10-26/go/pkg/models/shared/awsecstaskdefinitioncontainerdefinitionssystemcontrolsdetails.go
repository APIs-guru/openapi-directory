package shared

// AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails
// A namespaced kernel parameter to set in the container.
type AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails struct {
	Namespace *string `json:"Namespace,omitempty"`
	Value     *string `json:"Value,omitempty"`
}

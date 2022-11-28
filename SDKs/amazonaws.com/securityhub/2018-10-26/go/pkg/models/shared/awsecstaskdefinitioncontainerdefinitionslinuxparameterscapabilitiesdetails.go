package shared

// AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails
// The Linux capabilities for the container that are added to or dropped from the default configuration provided by Docker.
type AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails struct {
	Add  []string `json:"Add,omitempty"`
	Drop []string `json:"Drop,omitempty"`
}

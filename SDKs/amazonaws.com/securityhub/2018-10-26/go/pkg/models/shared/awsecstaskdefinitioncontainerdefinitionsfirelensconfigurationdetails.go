package shared

// AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails
// The FireLens configuration for the container. The configuration specifies and configures a log router for container logs.
type AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails struct {
	Options map[string]string `json:"Options,omitempty"`
	Type    *string           `json:"Type,omitempty"`
}

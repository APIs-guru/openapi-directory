package shared

// AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails
// A secret to pass to the container.
type AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails struct {
	Name      *string `json:"Name,omitempty"`
	ValueFrom *string `json:"ValueFrom,omitempty"`
}

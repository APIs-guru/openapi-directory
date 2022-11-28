package shared

// AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails
// A data volume to mount from another container.
type AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails struct {
	ReadOnly        *bool   `json:"ReadOnly,omitempty"`
	SourceContainer *string `json:"SourceContainer,omitempty"`
}

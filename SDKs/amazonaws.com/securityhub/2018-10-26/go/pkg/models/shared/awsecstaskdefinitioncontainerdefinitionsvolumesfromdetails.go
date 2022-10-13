package shared

type AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails struct {
	ReadOnly        *bool   `json:"ReadOnly"`
	SourceContainer *string `json:"SourceContainer"`
}

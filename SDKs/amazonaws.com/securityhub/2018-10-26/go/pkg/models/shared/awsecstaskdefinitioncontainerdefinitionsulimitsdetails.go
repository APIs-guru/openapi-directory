package shared

type AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails struct {
	HardLimit *int64  `json:"HardLimit"`
	Name      *string `json:"Name"`
	SoftLimit *int64  `json:"SoftLimit"`
}

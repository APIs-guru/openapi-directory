package shared

type AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails struct {
	HardLimit *int64  `json:"HardLimit,omitempty"`
	Name      *string `json:"Name,omitempty"`
	SoftLimit *int64  `json:"SoftLimit,omitempty"`
}

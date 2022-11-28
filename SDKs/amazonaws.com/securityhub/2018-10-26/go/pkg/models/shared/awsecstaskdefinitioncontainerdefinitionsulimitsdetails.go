package shared

// AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails
// A ulimit to set in the container.
type AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails struct {
	HardLimit *int64  `json:"HardLimit,omitempty"`
	Name      *string `json:"Name,omitempty"`
	SoftLimit *int64  `json:"SoftLimit,omitempty"`
}

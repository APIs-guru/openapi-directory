package shared

type AwsEcsServiceServiceRegistriesDetails struct {
	ContainerName *string `json:"ContainerName,omitempty"`
	ContainerPort *int64  `json:"ContainerPort,omitempty"`
	Port          *int64  `json:"Port,omitempty"`
	RegistryArn   *string `json:"RegistryArn,omitempty"`
}

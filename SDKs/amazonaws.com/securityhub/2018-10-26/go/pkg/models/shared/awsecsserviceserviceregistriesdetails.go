package shared

// AwsEcsServiceServiceRegistriesDetails
// Information about a service discovery registry to assign to the service.
type AwsEcsServiceServiceRegistriesDetails struct {
	ContainerName *string `json:"ContainerName,omitempty"`
	ContainerPort *int64  `json:"ContainerPort,omitempty"`
	Port          *int64  `json:"Port,omitempty"`
	RegistryArn   *string `json:"RegistryArn,omitempty"`
}

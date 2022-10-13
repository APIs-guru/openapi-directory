package shared

type AwsEcsServiceServiceRegistriesDetails struct {
	ContainerName *string `json:"ContainerName"`
	ContainerPort *int64  `json:"ContainerPort"`
	Port          *int64  `json:"Port"`
	RegistryArn   *string `json:"RegistryArn"`
}

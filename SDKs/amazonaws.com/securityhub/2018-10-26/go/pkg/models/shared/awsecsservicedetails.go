package shared

type AwsEcsServiceDetails struct {
	CapacityProviderStrategy      []AwsEcsServiceCapacityProviderStrategyDetails `json:"CapacityProviderStrategy"`
	Cluster                       *string                                        `json:"Cluster"`
	DeploymentConfiguration       *AwsEcsServiceDeploymentConfigurationDetails   `json:"DeploymentConfiguration"`
	DeploymentController          *AwsEcsServiceDeploymentControllerDetails      `json:"DeploymentController"`
	DesiredCount                  *int64                                         `json:"DesiredCount"`
	EnableEcsManagedTags          *bool                                          `json:"EnableEcsManagedTags"`
	EnableExecuteCommand          *bool                                          `json:"EnableExecuteCommand"`
	HealthCheckGracePeriodSeconds *int64                                         `json:"HealthCheckGracePeriodSeconds"`
	LaunchType                    *string                                        `json:"LaunchType"`
	LoadBalancers                 []AwsEcsServiceLoadBalancersDetails            `json:"LoadBalancers"`
	Name                          *string                                        `json:"Name"`
	NetworkConfiguration          *AwsEcsServiceNetworkConfigurationDetails      `json:"NetworkConfiguration"`
	PlacementConstraints          []AwsEcsServicePlacementConstraintsDetails     `json:"PlacementConstraints"`
	PlacementStrategies           []AwsEcsServicePlacementStrategiesDetails      `json:"PlacementStrategies"`
	PlatformVersion               *string                                        `json:"PlatformVersion"`
	PropagateTags                 *string                                        `json:"PropagateTags"`
	Role                          *string                                        `json:"Role"`
	SchedulingStrategy            *string                                        `json:"SchedulingStrategy"`
	ServiceArn                    *string                                        `json:"ServiceArn"`
	ServiceName                   *string                                        `json:"ServiceName"`
	ServiceRegistries             []AwsEcsServiceServiceRegistriesDetails        `json:"ServiceRegistries"`
	TaskDefinition                *string                                        `json:"TaskDefinition"`
}

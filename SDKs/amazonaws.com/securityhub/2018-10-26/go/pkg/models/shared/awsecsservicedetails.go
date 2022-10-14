package shared

type AwsEcsServiceDetails struct {
	CapacityProviderStrategy      []AwsEcsServiceCapacityProviderStrategyDetails `json:"CapacityProviderStrategy,omitempty"`
	Cluster                       *string                                        `json:"Cluster,omitempty"`
	DeploymentConfiguration       *AwsEcsServiceDeploymentConfigurationDetails   `json:"DeploymentConfiguration,omitempty"`
	DeploymentController          *AwsEcsServiceDeploymentControllerDetails      `json:"DeploymentController,omitempty"`
	DesiredCount                  *int64                                         `json:"DesiredCount,omitempty"`
	EnableEcsManagedTags          *bool                                          `json:"EnableEcsManagedTags,omitempty"`
	EnableExecuteCommand          *bool                                          `json:"EnableExecuteCommand,omitempty"`
	HealthCheckGracePeriodSeconds *int64                                         `json:"HealthCheckGracePeriodSeconds,omitempty"`
	LaunchType                    *string                                        `json:"LaunchType,omitempty"`
	LoadBalancers                 []AwsEcsServiceLoadBalancersDetails            `json:"LoadBalancers,omitempty"`
	Name                          *string                                        `json:"Name,omitempty"`
	NetworkConfiguration          *AwsEcsServiceNetworkConfigurationDetails      `json:"NetworkConfiguration,omitempty"`
	PlacementConstraints          []AwsEcsServicePlacementConstraintsDetails     `json:"PlacementConstraints,omitempty"`
	PlacementStrategies           []AwsEcsServicePlacementStrategiesDetails      `json:"PlacementStrategies,omitempty"`
	PlatformVersion               *string                                        `json:"PlatformVersion,omitempty"`
	PropagateTags                 *string                                        `json:"PropagateTags,omitempty"`
	Role                          *string                                        `json:"Role,omitempty"`
	SchedulingStrategy            *string                                        `json:"SchedulingStrategy,omitempty"`
	ServiceArn                    *string                                        `json:"ServiceArn,omitempty"`
	ServiceName                   *string                                        `json:"ServiceName,omitempty"`
	ServiceRegistries             []AwsEcsServiceServiceRegistriesDetails        `json:"ServiceRegistries,omitempty"`
	TaskDefinition                *string                                        `json:"TaskDefinition,omitempty"`
}

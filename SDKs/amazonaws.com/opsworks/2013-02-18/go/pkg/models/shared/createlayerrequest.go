package shared

type CreateLayerRequest struct {
	Attributes                  map[string]string            `json:"Attributes,omitempty"`
	AutoAssignElasticIps        *bool                        `json:"AutoAssignElasticIps,omitempty"`
	AutoAssignPublicIps         *bool                        `json:"AutoAssignPublicIps,omitempty"`
	CloudWatchLogsConfiguration *CloudWatchLogsConfiguration `json:"CloudWatchLogsConfiguration,omitempty"`
	CustomInstanceProfileArn    *string                      `json:"CustomInstanceProfileArn,omitempty"`
	CustomJSON                  *string                      `json:"CustomJson,omitempty"`
	CustomRecipes               *Recipes                     `json:"CustomRecipes,omitempty"`
	CustomSecurityGroupIds      []string                     `json:"CustomSecurityGroupIds,omitempty"`
	EnableAutoHealing           *bool                        `json:"EnableAutoHealing,omitempty"`
	InstallUpdatesOnBoot        *bool                        `json:"InstallUpdatesOnBoot,omitempty"`
	LifecycleEventConfiguration *LifecycleEventConfiguration `json:"LifecycleEventConfiguration,omitempty"`
	Name                        string                       `json:"Name"`
	Packages                    []string                     `json:"Packages,omitempty"`
	Shortname                   string                       `json:"Shortname"`
	StackID                     string                       `json:"StackId"`
	Type                        LayerTypeEnum                `json:"Type"`
	UseEbsOptimizedInstances    *bool                        `json:"UseEbsOptimizedInstances,omitempty"`
	VolumeConfigurations        []VolumeConfiguration        `json:"VolumeConfigurations,omitempty"`
}

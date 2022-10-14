package shared

type UpdateLayerRequest struct {
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
	LayerID                     string                       `json:"LayerId"`
	LifecycleEventConfiguration *LifecycleEventConfiguration `json:"LifecycleEventConfiguration,omitempty"`
	Name                        *string                      `json:"Name,omitempty"`
	Packages                    []string                     `json:"Packages,omitempty"`
	Shortname                   *string                      `json:"Shortname,omitempty"`
	UseEbsOptimizedInstances    *bool                        `json:"UseEbsOptimizedInstances,omitempty"`
	VolumeConfigurations        []VolumeConfiguration        `json:"VolumeConfigurations,omitempty"`
}

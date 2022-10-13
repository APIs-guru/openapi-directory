package shared

type UpdateLayerRequest struct {
	Attributes                  map[string]string            `json:"Attributes"`
	AutoAssignElasticIps        *bool                        `json:"AutoAssignElasticIps"`
	AutoAssignPublicIps         *bool                        `json:"AutoAssignPublicIps"`
	CloudWatchLogsConfiguration *CloudWatchLogsConfiguration `json:"CloudWatchLogsConfiguration"`
	CustomInstanceProfileArn    *string                      `json:"CustomInstanceProfileArn"`
	CustomJSON                  *string                      `json:"CustomJson"`
	CustomRecipes               *Recipes                     `json:"CustomRecipes"`
	CustomSecurityGroupIds      []string                     `json:"CustomSecurityGroupIds"`
	EnableAutoHealing           *bool                        `json:"EnableAutoHealing"`
	InstallUpdatesOnBoot        *bool                        `json:"InstallUpdatesOnBoot"`
	LayerID                     string                       `json:"LayerId"`
	LifecycleEventConfiguration *LifecycleEventConfiguration `json:"LifecycleEventConfiguration"`
	Name                        *string                      `json:"Name"`
	Packages                    []string                     `json:"Packages"`
	Shortname                   *string                      `json:"Shortname"`
	UseEbsOptimizedInstances    *bool                        `json:"UseEbsOptimizedInstances"`
	VolumeConfigurations        []VolumeConfiguration        `json:"VolumeConfigurations"`
}

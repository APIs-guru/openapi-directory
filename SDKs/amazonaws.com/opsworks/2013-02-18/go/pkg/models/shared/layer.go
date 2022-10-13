package shared

type Layer struct {
	Arn                         *string                      `json:"Arn"`
	Attributes                  map[string]string            `json:"Attributes"`
	AutoAssignElasticIps        *bool                        `json:"AutoAssignElasticIps"`
	AutoAssignPublicIps         *bool                        `json:"AutoAssignPublicIps"`
	CloudWatchLogsConfiguration *CloudWatchLogsConfiguration `json:"CloudWatchLogsConfiguration"`
	CreatedAt                   *string                      `json:"CreatedAt"`
	CustomInstanceProfileArn    *string                      `json:"CustomInstanceProfileArn"`
	CustomJSON                  *string                      `json:"CustomJson"`
	CustomRecipes               *Recipes                     `json:"CustomRecipes"`
	CustomSecurityGroupIds      []string                     `json:"CustomSecurityGroupIds"`
	DefaultRecipes              *Recipes                     `json:"DefaultRecipes"`
	DefaultSecurityGroupNames   []string                     `json:"DefaultSecurityGroupNames"`
	EnableAutoHealing           *bool                        `json:"EnableAutoHealing"`
	InstallUpdatesOnBoot        *bool                        `json:"InstallUpdatesOnBoot"`
	LayerID                     *string                      `json:"LayerId"`
	LifecycleEventConfiguration *LifecycleEventConfiguration `json:"LifecycleEventConfiguration"`
	Name                        *string                      `json:"Name"`
	Packages                    []string                     `json:"Packages"`
	Shortname                   *string                      `json:"Shortname"`
	StackID                     *string                      `json:"StackId"`
	Type                        *LayerTypeEnum               `json:"Type"`
	UseEbsOptimizedInstances    *bool                        `json:"UseEbsOptimizedInstances"`
	VolumeConfigurations        []VolumeConfiguration        `json:"VolumeConfigurations"`
}

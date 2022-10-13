package shared

type AwsElasticBeanstalkEnvironmentOptionSetting struct {
	Namespace    *string `json:"Namespace"`
	OptionName   *string `json:"OptionName"`
	ResourceName *string `json:"ResourceName"`
	Value        *string `json:"Value"`
}

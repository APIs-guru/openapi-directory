package shared

// AwsElasticBeanstalkEnvironmentOptionSetting
// A configuration option setting for the environment.
type AwsElasticBeanstalkEnvironmentOptionSetting struct {
	Namespace    *string `json:"Namespace,omitempty"`
	OptionName   *string `json:"OptionName,omitempty"`
	ResourceName *string `json:"ResourceName,omitempty"`
	Value        *string `json:"Value,omitempty"`
}

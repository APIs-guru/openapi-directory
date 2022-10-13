package shared

type AwsElasticBeanstalkEnvironmentDetails struct {
	ApplicationName   *string                                         `json:"ApplicationName"`
	Cname             *string                                         `json:"Cname"`
	DateCreated       *string                                         `json:"DateCreated"`
	DateUpdated       *string                                         `json:"DateUpdated"`
	Description       *string                                         `json:"Description"`
	EndpointURL       *string                                         `json:"EndpointUrl"`
	EnvironmentArn    *string                                         `json:"EnvironmentArn"`
	EnvironmentID     *string                                         `json:"EnvironmentId"`
	EnvironmentLinks  []AwsElasticBeanstalkEnvironmentEnvironmentLink `json:"EnvironmentLinks"`
	EnvironmentName   *string                                         `json:"EnvironmentName"`
	OptionSettings    []AwsElasticBeanstalkEnvironmentOptionSetting   `json:"OptionSettings"`
	PlatformArn       *string                                         `json:"PlatformArn"`
	SolutionStackName *string                                         `json:"SolutionStackName"`
	Status            *string                                         `json:"Status"`
	Tier              *AwsElasticBeanstalkEnvironmentTier             `json:"Tier"`
	VersionLabel      *string                                         `json:"VersionLabel"`
}

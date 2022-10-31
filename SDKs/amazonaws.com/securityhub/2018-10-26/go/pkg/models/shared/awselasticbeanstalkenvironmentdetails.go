package shared



type AwsElasticBeanstalkEnvironmentDetails struct {
    ApplicationName *string `json:"ApplicationName,omitempty"`
    Cname *string `json:"Cname,omitempty"`
    DateCreated *string `json:"DateCreated,omitempty"`
    DateUpdated *string `json:"DateUpdated,omitempty"`
    Description *string `json:"Description,omitempty"`
    EndpointURL *string `json:"EndpointUrl,omitempty"`
    EnvironmentArn *string `json:"EnvironmentArn,omitempty"`
    EnvironmentID *string `json:"EnvironmentId,omitempty"`
    EnvironmentLinks []AwsElasticBeanstalkEnvironmentEnvironmentLink `json:"EnvironmentLinks,omitempty"`
    EnvironmentName *string `json:"EnvironmentName,omitempty"`
    OptionSettings []AwsElasticBeanstalkEnvironmentOptionSetting `json:"OptionSettings,omitempty"`
    PlatformArn *string `json:"PlatformArn,omitempty"`
    SolutionStackName *string `json:"SolutionStackName,omitempty"`
    Status *string `json:"Status,omitempty"`
    Tier *AwsElasticBeanstalkEnvironmentTier `json:"Tier,omitempty"`
    VersionLabel *string `json:"VersionLabel,omitempty"`
    
}


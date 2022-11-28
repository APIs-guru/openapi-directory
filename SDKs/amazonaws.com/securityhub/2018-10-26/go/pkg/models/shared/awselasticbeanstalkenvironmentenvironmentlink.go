package shared

// AwsElasticBeanstalkEnvironmentEnvironmentLink
// Contains information about a link to another environment that is in the same group.
type AwsElasticBeanstalkEnvironmentEnvironmentLink struct {
	EnvironmentName *string `json:"EnvironmentName,omitempty"`
	LinkName        *string `json:"LinkName,omitempty"`
}

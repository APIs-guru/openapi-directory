package shared

// AwsElasticBeanstalkEnvironmentTier
// Contains information about the tier of the environment.
type AwsElasticBeanstalkEnvironmentTier struct {
	Name    *string `json:"Name,omitempty"`
	Type    *string `json:"Type,omitempty"`
	Version *string `json:"Version,omitempty"`
}

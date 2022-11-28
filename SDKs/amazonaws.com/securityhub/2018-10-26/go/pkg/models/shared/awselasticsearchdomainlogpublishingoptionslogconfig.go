package shared

// AwsElasticsearchDomainLogPublishingOptionsLogConfig
// The log configuration.
type AwsElasticsearchDomainLogPublishingOptionsLogConfig struct {
	CloudWatchLogsLogGroupArn *string `json:"CloudWatchLogsLogGroupArn,omitempty"`
	Enabled                   *bool   `json:"Enabled,omitempty"`
}

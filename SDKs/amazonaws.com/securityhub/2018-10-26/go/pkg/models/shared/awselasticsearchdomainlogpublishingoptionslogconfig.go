package shared

type AwsElasticsearchDomainLogPublishingOptionsLogConfig struct {
	CloudWatchLogsLogGroupArn *string `json:"CloudWatchLogsLogGroupArn,omitempty"`
	Enabled                   *bool   `json:"Enabled,omitempty"`
}

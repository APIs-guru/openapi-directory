package shared

type AwsElasticsearchDomainLogPublishingOptionsLogConfig struct {
	CloudWatchLogsLogGroupArn *string `json:"CloudWatchLogsLogGroupArn"`
	Enabled                   *bool   `json:"Enabled"`
}

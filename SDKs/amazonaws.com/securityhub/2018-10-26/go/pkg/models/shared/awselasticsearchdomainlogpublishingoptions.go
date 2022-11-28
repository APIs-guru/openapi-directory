package shared

// AwsElasticsearchDomainLogPublishingOptions
// configures the CloudWatch Logs to publish for the Elasticsearch domain.
type AwsElasticsearchDomainLogPublishingOptions struct {
	AuditLogs      *AwsElasticsearchDomainLogPublishingOptionsLogConfig `json:"AuditLogs,omitempty"`
	IndexSlowLogs  *AwsElasticsearchDomainLogPublishingOptionsLogConfig `json:"IndexSlowLogs,omitempty"`
	SearchSlowLogs *AwsElasticsearchDomainLogPublishingOptionsLogConfig `json:"SearchSlowLogs,omitempty"`
}

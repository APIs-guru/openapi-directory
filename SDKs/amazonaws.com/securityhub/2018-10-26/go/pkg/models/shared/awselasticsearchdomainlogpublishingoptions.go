package shared

type AwsElasticsearchDomainLogPublishingOptions struct {
	AuditLogs      *AwsElasticsearchDomainLogPublishingOptionsLogConfig `json:"AuditLogs"`
	IndexSlowLogs  *AwsElasticsearchDomainLogPublishingOptionsLogConfig `json:"IndexSlowLogs"`
	SearchSlowLogs *AwsElasticsearchDomainLogPublishingOptionsLogConfig `json:"SearchSlowLogs"`
}

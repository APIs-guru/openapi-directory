package shared



type AwsElasticsearchDomainLogPublishingOptions struct {
    AuditLogs *AwsElasticsearchDomainLogPublishingOptionsLogConfig `json:"AuditLogs,omitempty"`
    IndexSlowLogs *AwsElasticsearchDomainLogPublishingOptionsLogConfig `json:"IndexSlowLogs,omitempty"`
    SearchSlowLogs *AwsElasticsearchDomainLogPublishingOptionsLogConfig `json:"SearchSlowLogs,omitempty"`
    
}


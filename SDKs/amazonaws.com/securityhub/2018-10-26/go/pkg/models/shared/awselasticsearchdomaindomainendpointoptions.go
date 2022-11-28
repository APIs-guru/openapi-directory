package shared

// AwsElasticsearchDomainDomainEndpointOptions
// Additional options for the domain endpoint, such as whether to require HTTPS for all traffic.
type AwsElasticsearchDomainDomainEndpointOptions struct {
	EnforceHTTPS      *bool   `json:"EnforceHTTPS,omitempty"`
	TLSSecurityPolicy *string `json:"TLSSecurityPolicy,omitempty"`
}

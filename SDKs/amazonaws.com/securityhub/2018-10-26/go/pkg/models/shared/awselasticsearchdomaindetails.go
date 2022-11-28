package shared

// AwsElasticsearchDomainDetails
// Information about an Amazon Elasticsearch Service domain.
type AwsElasticsearchDomainDetails struct {
	AccessPolicies              *string                                                  `json:"AccessPolicies,omitempty"`
	DomainEndpointOptions       *AwsElasticsearchDomainDomainEndpointOptions             `json:"DomainEndpointOptions,omitempty"`
	DomainID                    *string                                                  `json:"DomainId,omitempty"`
	DomainName                  *string                                                  `json:"DomainName,omitempty"`
	ElasticsearchClusterConfig  *AwsElasticsearchDomainElasticsearchClusterConfigDetails `json:"ElasticsearchClusterConfig,omitempty"`
	ElasticsearchVersion        *string                                                  `json:"ElasticsearchVersion,omitempty"`
	EncryptionAtRestOptions     *AwsElasticsearchDomainEncryptionAtRestOptions           `json:"EncryptionAtRestOptions,omitempty"`
	Endpoint                    *string                                                  `json:"Endpoint,omitempty"`
	Endpoints                   map[string]string                                        `json:"Endpoints,omitempty"`
	LogPublishingOptions        *AwsElasticsearchDomainLogPublishingOptions              `json:"LogPublishingOptions,omitempty"`
	NodeToNodeEncryptionOptions *AwsElasticsearchDomainNodeToNodeEncryptionOptions       `json:"NodeToNodeEncryptionOptions,omitempty"`
	ServiceSoftwareOptions      *AwsElasticsearchDomainServiceSoftwareOptions            `json:"ServiceSoftwareOptions,omitempty"`
	VpcOptions                  *AwsElasticsearchDomainVpcOptions                        `json:"VPCOptions,omitempty"`
}

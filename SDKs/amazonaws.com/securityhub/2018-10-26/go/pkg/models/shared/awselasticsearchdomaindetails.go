package shared

type AwsElasticsearchDomainDetails struct {
	AccessPolicies              *string                                                  `json:"AccessPolicies"`
	DomainEndpointOptions       *AwsElasticsearchDomainDomainEndpointOptions             `json:"DomainEndpointOptions"`
	DomainID                    *string                                                  `json:"DomainId"`
	DomainName                  *string                                                  `json:"DomainName"`
	ElasticsearchClusterConfig  *AwsElasticsearchDomainElasticsearchClusterConfigDetails `json:"ElasticsearchClusterConfig"`
	ElasticsearchVersion        *string                                                  `json:"ElasticsearchVersion"`
	EncryptionAtRestOptions     *AwsElasticsearchDomainEncryptionAtRestOptions           `json:"EncryptionAtRestOptions"`
	Endpoint                    *string                                                  `json:"Endpoint"`
	Endpoints                   map[string]string                                        `json:"Endpoints"`
	LogPublishingOptions        *AwsElasticsearchDomainLogPublishingOptions              `json:"LogPublishingOptions"`
	NodeToNodeEncryptionOptions *AwsElasticsearchDomainNodeToNodeEncryptionOptions       `json:"NodeToNodeEncryptionOptions"`
	ServiceSoftwareOptions      *AwsElasticsearchDomainServiceSoftwareOptions            `json:"ServiceSoftwareOptions"`
	VpcOptions                  *AwsElasticsearchDomainVpcOptions                        `json:"VPCOptions"`
}

package shared

type AwsElasticsearchDomainElasticsearchClusterConfigDetails struct {
	DedicatedMasterCount   *int64                                                                      `json:"DedicatedMasterCount"`
	DedicatedMasterEnabled *bool                                                                       `json:"DedicatedMasterEnabled"`
	DedicatedMasterType    *string                                                                     `json:"DedicatedMasterType"`
	InstanceCount          *int64                                                                      `json:"InstanceCount"`
	InstanceType           *string                                                                     `json:"InstanceType"`
	ZoneAwarenessConfig    *AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails `json:"ZoneAwarenessConfig"`
	ZoneAwarenessEnabled   *bool                                                                       `json:"ZoneAwarenessEnabled"`
}

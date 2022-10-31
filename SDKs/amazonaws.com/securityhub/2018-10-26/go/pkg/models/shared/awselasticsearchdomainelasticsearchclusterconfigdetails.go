package shared



type AwsElasticsearchDomainElasticsearchClusterConfigDetails struct {
    DedicatedMasterCount *int64 `json:"DedicatedMasterCount,omitempty"`
    DedicatedMasterEnabled *bool `json:"DedicatedMasterEnabled,omitempty"`
    DedicatedMasterType *string `json:"DedicatedMasterType,omitempty"`
    InstanceCount *int64 `json:"InstanceCount,omitempty"`
    InstanceType *string `json:"InstanceType,omitempty"`
    ZoneAwarenessConfig *AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails `json:"ZoneAwarenessConfig,omitempty"`
    ZoneAwarenessEnabled *bool `json:"ZoneAwarenessEnabled,omitempty"`
    
}


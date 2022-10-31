package shared



type Cluster struct {
    ACLName *string `json:"ACLName,omitempty"`
    Arn *string `json:"ARN,omitempty"`
    AutoMinorVersionUpgrade *bool `json:"AutoMinorVersionUpgrade,omitempty"`
    AvailabilityMode *AzStatusEnum `json:"AvailabilityMode,omitempty"`
    ClusterEndpoint *Endpoint `json:"ClusterEndpoint,omitempty"`
    Description *string `json:"Description,omitempty"`
    EnginePatchVersion *string `json:"EnginePatchVersion,omitempty"`
    EngineVersion *string `json:"EngineVersion,omitempty"`
    KmsKeyID *string `json:"KmsKeyId,omitempty"`
    MaintenanceWindow *string `json:"MaintenanceWindow,omitempty"`
    Name *string `json:"Name,omitempty"`
    NodeType *string `json:"NodeType,omitempty"`
    NumberOfShards *int64 `json:"NumberOfShards,omitempty"`
    ParameterGroupName *string `json:"ParameterGroupName,omitempty"`
    ParameterGroupStatus *string `json:"ParameterGroupStatus,omitempty"`
    PendingUpdates *ClusterPendingUpdates `json:"PendingUpdates,omitempty"`
    SecurityGroups []SecurityGroupMembership `json:"SecurityGroups,omitempty"`
    Shards []Shard `json:"Shards,omitempty"`
    SnapshotRetentionLimit *int64 `json:"SnapshotRetentionLimit,omitempty"`
    SnapshotWindow *string `json:"SnapshotWindow,omitempty"`
    SnsTopicArn *string `json:"SnsTopicArn,omitempty"`
    SnsTopicStatus *string `json:"SnsTopicStatus,omitempty"`
    Status *string `json:"Status,omitempty"`
    SubnetGroupName *string `json:"SubnetGroupName,omitempty"`
    TLSEnabled *bool `json:"TLSEnabled,omitempty"`
    
}


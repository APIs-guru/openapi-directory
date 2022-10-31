package shared



type ClusterConfiguration struct {
    Description *string `json:"Description,omitempty"`
    EngineVersion *string `json:"EngineVersion,omitempty"`
    MaintenanceWindow *string `json:"MaintenanceWindow,omitempty"`
    Name *string `json:"Name,omitempty"`
    NodeType *string `json:"NodeType,omitempty"`
    NumShards *int64 `json:"NumShards,omitempty"`
    ParameterGroupName *string `json:"ParameterGroupName,omitempty"`
    Port *int64 `json:"Port,omitempty"`
    Shards []ShardDetail `json:"Shards,omitempty"`
    SnapshotRetentionLimit *int64 `json:"SnapshotRetentionLimit,omitempty"`
    SnapshotWindow *string `json:"SnapshotWindow,omitempty"`
    SubnetGroupName *string `json:"SubnetGroupName,omitempty"`
    TopicArn *string `json:"TopicArn,omitempty"`
    VpcID *string `json:"VpcId,omitempty"`
    
}


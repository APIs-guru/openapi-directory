package shared



type UpdateClusterRequest struct {
    ACLName *string `json:"ACLName,omitempty"`
    ClusterName string `json:"ClusterName"`
    Description *string `json:"Description,omitempty"`
    EngineVersion *string `json:"EngineVersion,omitempty"`
    MaintenanceWindow *string `json:"MaintenanceWindow,omitempty"`
    NodeType *string `json:"NodeType,omitempty"`
    ParameterGroupName *string `json:"ParameterGroupName,omitempty"`
    ReplicaConfiguration *ReplicaConfigurationRequest `json:"ReplicaConfiguration,omitempty"`
    SecurityGroupIds []string `json:"SecurityGroupIds,omitempty"`
    ShardConfiguration *ShardConfigurationRequest `json:"ShardConfiguration,omitempty"`
    SnapshotRetentionLimit *int64 `json:"SnapshotRetentionLimit,omitempty"`
    SnapshotWindow *string `json:"SnapshotWindow,omitempty"`
    SnsTopicArn *string `json:"SnsTopicArn,omitempty"`
    SnsTopicStatus *string `json:"SnsTopicStatus,omitempty"`
    
}


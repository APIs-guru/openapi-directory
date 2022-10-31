package shared



type CreateClusterRequest struct {
    ACLName string `json:"ACLName"`
    AutoMinorVersionUpgrade *bool `json:"AutoMinorVersionUpgrade,omitempty"`
    ClusterName string `json:"ClusterName"`
    Description *string `json:"Description,omitempty"`
    EngineVersion *string `json:"EngineVersion,omitempty"`
    KmsKeyID *string `json:"KmsKeyId,omitempty"`
    MaintenanceWindow *string `json:"MaintenanceWindow,omitempty"`
    NodeType string `json:"NodeType"`
    NumReplicasPerShard *int64 `json:"NumReplicasPerShard,omitempty"`
    NumShards *int64 `json:"NumShards,omitempty"`
    ParameterGroupName *string `json:"ParameterGroupName,omitempty"`
    Port *int64 `json:"Port,omitempty"`
    SecurityGroupIds []string `json:"SecurityGroupIds,omitempty"`
    SnapshotArns []string `json:"SnapshotArns,omitempty"`
    SnapshotName *string `json:"SnapshotName,omitempty"`
    SnapshotRetentionLimit *int64 `json:"SnapshotRetentionLimit,omitempty"`
    SnapshotWindow *string `json:"SnapshotWindow,omitempty"`
    SnsTopicArn *string `json:"SnsTopicArn,omitempty"`
    SubnetGroupName *string `json:"SubnetGroupName,omitempty"`
    TLSEnabled *bool `json:"TLSEnabled,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    
}


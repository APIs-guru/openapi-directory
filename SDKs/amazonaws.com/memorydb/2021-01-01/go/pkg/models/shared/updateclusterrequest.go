package shared

type UpdateClusterRequest struct {
	ACLName                *string                      `json:"ACLName"`
	ClusterName            string                       `json:"ClusterName"`
	Description            *string                      `json:"Description"`
	EngineVersion          *string                      `json:"EngineVersion"`
	MaintenanceWindow      *string                      `json:"MaintenanceWindow"`
	NodeType               *string                      `json:"NodeType"`
	ParameterGroupName     *string                      `json:"ParameterGroupName"`
	ReplicaConfiguration   *ReplicaConfigurationRequest `json:"ReplicaConfiguration"`
	SecurityGroupIds       []string                     `json:"SecurityGroupIds"`
	ShardConfiguration     *ShardConfigurationRequest   `json:"ShardConfiguration"`
	SnapshotRetentionLimit *int64                       `json:"SnapshotRetentionLimit"`
	SnapshotWindow         *string                      `json:"SnapshotWindow"`
	SnsTopicArn            *string                      `json:"SnsTopicArn"`
	SnsTopicStatus         *string                      `json:"SnsTopicStatus"`
}

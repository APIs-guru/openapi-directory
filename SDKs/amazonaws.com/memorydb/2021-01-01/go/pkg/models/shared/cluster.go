package shared

type Cluster struct {
	ACLName                 *string                   `json:"ACLName"`
	Arn                     *string                   `json:"ARN"`
	AutoMinorVersionUpgrade *bool                     `json:"AutoMinorVersionUpgrade"`
	AvailabilityMode        *AzStatusEnum             `json:"AvailabilityMode"`
	ClusterEndpoint         *Endpoint                 `json:"ClusterEndpoint"`
	Description             *string                   `json:"Description"`
	EnginePatchVersion      *string                   `json:"EnginePatchVersion"`
	EngineVersion           *string                   `json:"EngineVersion"`
	KmsKeyID                *string                   `json:"KmsKeyId"`
	MaintenanceWindow       *string                   `json:"MaintenanceWindow"`
	Name                    *string                   `json:"Name"`
	NodeType                *string                   `json:"NodeType"`
	NumberOfShards          *int64                    `json:"NumberOfShards"`
	ParameterGroupName      *string                   `json:"ParameterGroupName"`
	ParameterGroupStatus    *string                   `json:"ParameterGroupStatus"`
	PendingUpdates          *ClusterPendingUpdates    `json:"PendingUpdates"`
	SecurityGroups          []SecurityGroupMembership `json:"SecurityGroups"`
	Shards                  []Shard                   `json:"Shards"`
	SnapshotRetentionLimit  *int64                    `json:"SnapshotRetentionLimit"`
	SnapshotWindow          *string                   `json:"SnapshotWindow"`
	SnsTopicArn             *string                   `json:"SnsTopicArn"`
	SnsTopicStatus          *string                   `json:"SnsTopicStatus"`
	Status                  *string                   `json:"Status"`
	SubnetGroupName         *string                   `json:"SubnetGroupName"`
	TLSEnabled              *bool                     `json:"TLSEnabled"`
}

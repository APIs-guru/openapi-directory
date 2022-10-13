package shared

type ClusterConfiguration struct {
	Description            *string       `json:"Description"`
	EngineVersion          *string       `json:"EngineVersion"`
	MaintenanceWindow      *string       `json:"MaintenanceWindow"`
	Name                   *string       `json:"Name"`
	NodeType               *string       `json:"NodeType"`
	NumShards              *int64        `json:"NumShards"`
	ParameterGroupName     *string       `json:"ParameterGroupName"`
	Port                   *int64        `json:"Port"`
	Shards                 []ShardDetail `json:"Shards"`
	SnapshotRetentionLimit *int64        `json:"SnapshotRetentionLimit"`
	SnapshotWindow         *string       `json:"SnapshotWindow"`
	SubnetGroupName        *string       `json:"SubnetGroupName"`
	TopicArn               *string       `json:"TopicArn"`
	VpcID                  *string       `json:"VpcId"`
}

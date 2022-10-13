package shared

type CreateClusterRequest struct {
	ACLName                 string   `json:"ACLName"`
	AutoMinorVersionUpgrade *bool    `json:"AutoMinorVersionUpgrade"`
	ClusterName             string   `json:"ClusterName"`
	Description             *string  `json:"Description"`
	EngineVersion           *string  `json:"EngineVersion"`
	KmsKeyID                *string  `json:"KmsKeyId"`
	MaintenanceWindow       *string  `json:"MaintenanceWindow"`
	NodeType                string   `json:"NodeType"`
	NumReplicasPerShard     *int64   `json:"NumReplicasPerShard"`
	NumShards               *int64   `json:"NumShards"`
	ParameterGroupName      *string  `json:"ParameterGroupName"`
	Port                    *int64   `json:"Port"`
	SecurityGroupIds        []string `json:"SecurityGroupIds"`
	SnapshotArns            []string `json:"SnapshotArns"`
	SnapshotName            *string  `json:"SnapshotName"`
	SnapshotRetentionLimit  *int64   `json:"SnapshotRetentionLimit"`
	SnapshotWindow          *string  `json:"SnapshotWindow"`
	SnsTopicArn             *string  `json:"SnsTopicArn"`
	SubnetGroupName         *string  `json:"SubnetGroupName"`
	TLSEnabled              *bool    `json:"TLSEnabled"`
	Tags                    []Tag    `json:"Tags"`
}

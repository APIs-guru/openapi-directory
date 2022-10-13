package shared

type Snapshot struct {
	Arn                  *string               `json:"ARN"`
	ClusterConfiguration *ClusterConfiguration `json:"ClusterConfiguration"`
	KmsKeyID             *string               `json:"KmsKeyId"`
	Name                 *string               `json:"Name"`
	Source               *string               `json:"Source"`
	Status               *string               `json:"Status"`
}

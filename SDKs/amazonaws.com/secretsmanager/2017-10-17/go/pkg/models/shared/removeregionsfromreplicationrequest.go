package shared

type RemoveRegionsFromReplicationRequest struct {
	RemoveReplicaRegions []string `json:"RemoveReplicaRegions"`
	SecretID             string   `json:"SecretId"`
}

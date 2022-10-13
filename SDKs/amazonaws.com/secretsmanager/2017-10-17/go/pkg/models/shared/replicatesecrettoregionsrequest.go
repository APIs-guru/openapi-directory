package shared

type ReplicateSecretToRegionsRequest struct {
	AddReplicaRegions           []ReplicaRegionType `json:"AddReplicaRegions"`
	ForceOverwriteReplicaSecret *bool               `json:"ForceOverwriteReplicaSecret"`
	SecretID                    string              `json:"SecretId"`
}

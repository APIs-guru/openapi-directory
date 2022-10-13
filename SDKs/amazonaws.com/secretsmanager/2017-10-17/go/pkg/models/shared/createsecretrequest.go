package shared

type CreateSecretRequest struct {
	AddReplicaRegions           []ReplicaRegionType `json:"AddReplicaRegions"`
	ClientRequestToken          *string             `json:"ClientRequestToken"`
	Description                 *string             `json:"Description"`
	ForceOverwriteReplicaSecret *bool               `json:"ForceOverwriteReplicaSecret"`
	KmsKeyID                    *string             `json:"KmsKeyId"`
	Name                        string              `json:"Name"`
	SecretBinary                *string             `json:"SecretBinary"`
	SecretString                *string             `json:"SecretString"`
	Tags                        []Tag               `json:"Tags"`
}

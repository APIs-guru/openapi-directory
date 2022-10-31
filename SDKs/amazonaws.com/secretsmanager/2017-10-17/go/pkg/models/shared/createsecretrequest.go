package shared



type CreateSecretRequest struct {
    AddReplicaRegions []ReplicaRegionType `json:"AddReplicaRegions,omitempty"`
    ClientRequestToken *string `json:"ClientRequestToken,omitempty"`
    Description *string `json:"Description,omitempty"`
    ForceOverwriteReplicaSecret *bool `json:"ForceOverwriteReplicaSecret,omitempty"`
    KmsKeyID *string `json:"KmsKeyId,omitempty"`
    Name string `json:"Name"`
    SecretBinary *string `json:"SecretBinary,omitempty"`
    SecretString *string `json:"SecretString,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    
}


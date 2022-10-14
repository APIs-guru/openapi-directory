package shared

type ReplicaRegionType struct {
	KmsKeyID *string `json:"KmsKeyId,omitempty"`
	Region   *string `json:"Region,omitempty"`
}

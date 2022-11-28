package shared

// ReplicaRegionType
// (Optional) Custom type consisting of a <code>Region</code> (required) and the <code>KmsKeyId</code> which can be an <code>ARN</code>, <code>Key ID</code>, or <code>Alias</code>.
type ReplicaRegionType struct {
	KmsKeyID *string `json:"KmsKeyId,omitempty"`
	Region   *string `json:"Region,omitempty"`
}

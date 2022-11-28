package shared

// AwsElasticsearchDomainEncryptionAtRestOptions
// Details about the configuration for encryption at rest.
type AwsElasticsearchDomainEncryptionAtRestOptions struct {
	Enabled  *bool   `json:"Enabled,omitempty"`
	KmsKeyID *string `json:"KmsKeyId,omitempty"`
}

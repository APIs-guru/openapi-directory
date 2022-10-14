package shared

type AwsElasticsearchDomainEncryptionAtRestOptions struct {
	Enabled  *bool   `json:"Enabled,omitempty"`
	KmsKeyID *string `json:"KmsKeyId,omitempty"`
}

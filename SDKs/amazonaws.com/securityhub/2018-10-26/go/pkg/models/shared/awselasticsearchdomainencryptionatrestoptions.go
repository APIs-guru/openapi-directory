package shared

type AwsElasticsearchDomainEncryptionAtRestOptions struct {
	Enabled  *bool   `json:"Enabled"`
	KmsKeyID *string `json:"KmsKeyId"`
}

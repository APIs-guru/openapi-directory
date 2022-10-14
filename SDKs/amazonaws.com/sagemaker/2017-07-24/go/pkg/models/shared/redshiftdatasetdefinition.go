package shared

type RedshiftDatasetDefinition struct {
	ClusterID         string                             `json:"ClusterId"`
	ClusterRoleArn    string                             `json:"ClusterRoleArn"`
	Database          string                             `json:"Database"`
	DbUser            string                             `json:"DbUser"`
	KmsKeyID          *string                            `json:"KmsKeyId,omitempty"`
	OutputCompression *RedshiftResultCompressionTypeEnum `json:"OutputCompression,omitempty"`
	OutputFormat      RedshiftResultFormatEnum           `json:"OutputFormat"`
	OutputS3URI       string                             `json:"OutputS3Uri"`
	QueryString       string                             `json:"QueryString"`
}

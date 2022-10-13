package shared

type RedshiftDatasetDefinition struct {
	ClusterID         string                             `json:"ClusterId"`
	ClusterRoleArn    string                             `json:"ClusterRoleArn"`
	Database          string                             `json:"Database"`
	DbUser            string                             `json:"DbUser"`
	KmsKeyID          *string                            `json:"KmsKeyId"`
	OutputCompression *RedshiftResultCompressionTypeEnum `json:"OutputCompression"`
	OutputFormat      RedshiftResultFormatEnum           `json:"OutputFormat"`
	OutputS3URI       string                             `json:"OutputS3Uri"`
	QueryString       string                             `json:"QueryString"`
}

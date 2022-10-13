package shared

type TransformS3DataSource struct {
	S3DataType S3DataTypeEnum `json:"S3DataType"`
	S3URI      string         `json:"S3Uri"`
}

package shared

type ProcessingS3Input struct {
	LocalPath              *string                               `json:"LocalPath"`
	S3CompressionType      *ProcessingS3CompressionTypeEnum      `json:"S3CompressionType"`
	S3DataDistributionType *ProcessingS3DataDistributionTypeEnum `json:"S3DataDistributionType"`
	S3DataType             ProcessingS3DataTypeEnum              `json:"S3DataType"`
	S3InputMode            *ProcessingS3InputModeEnum            `json:"S3InputMode"`
	S3URI                  string                                `json:"S3Uri"`
}

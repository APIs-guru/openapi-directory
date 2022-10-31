package shared



type ProcessingS3Input struct {
    LocalPath *string `json:"LocalPath,omitempty"`
    S3CompressionType *ProcessingS3CompressionTypeEnum `json:"S3CompressionType,omitempty"`
    S3DataDistributionType *ProcessingS3DataDistributionTypeEnum `json:"S3DataDistributionType,omitempty"`
    S3DataType ProcessingS3DataTypeEnum `json:"S3DataType"`
    S3InputMode *ProcessingS3InputModeEnum `json:"S3InputMode,omitempty"`
    S3URI string `json:"S3Uri"`
    
}


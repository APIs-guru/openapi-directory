package shared

type AthenaDatasetDefinition struct {
	Catalog           string                           `json:"Catalog"`
	Database          string                           `json:"Database"`
	KmsKeyID          *string                          `json:"KmsKeyId"`
	OutputCompression *AthenaResultCompressionTypeEnum `json:"OutputCompression"`
	OutputFormat      AthenaResultFormatEnum           `json:"OutputFormat"`
	OutputS3URI       string                           `json:"OutputS3Uri"`
	QueryString       string                           `json:"QueryString"`
	WorkGroup         *string                          `json:"WorkGroup"`
}

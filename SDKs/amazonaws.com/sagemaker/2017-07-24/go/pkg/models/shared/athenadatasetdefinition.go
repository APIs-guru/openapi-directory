package shared

type AthenaDatasetDefinition struct {
	Catalog           string                           `json:"Catalog"`
	Database          string                           `json:"Database"`
	KmsKeyID          *string                          `json:"KmsKeyId,omitempty"`
	OutputCompression *AthenaResultCompressionTypeEnum `json:"OutputCompression,omitempty"`
	OutputFormat      AthenaResultFormatEnum           `json:"OutputFormat"`
	OutputS3URI       string                           `json:"OutputS3Uri"`
	QueryString       string                           `json:"QueryString"`
	WorkGroup         *string                          `json:"WorkGroup,omitempty"`
}

package shared

// IngestionS3InputConfiguration
//
//	Specifies S3 configuration information for the input data for the data ingestion job.
type IngestionS3InputConfiguration struct {
	Bucket string  `json:"Bucket"`
	Prefix *string `json:"Prefix,omitempty"`
}

package shared

// IngestionInputConfiguration
//
//	Specifies configuration information for the input data for the data ingestion job, including input data S3 location.
type IngestionInputConfiguration struct {
	S3InputConfiguration IngestionS3InputConfiguration `json:"S3InputConfiguration"`
}

package shared

// DatasetExportJobOutput
// The output configuration parameters of a dataset export job.
type DatasetExportJobOutput struct {
	S3DataDestination S3DataConfig `json:"s3DataDestination"`
}

package shared

// S3ObjectSource
// Template bundle S3 bucket data.
type S3ObjectSource struct {
	Bucket string `json:"bucket"`
	Key    string `json:"key"`
}

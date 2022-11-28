package shared

// S3Object
// Contains information about an S3 bucket.
type S3Object struct {
	Bucket string `json:"Bucket"`
	Key    string `json:"Key"`
}

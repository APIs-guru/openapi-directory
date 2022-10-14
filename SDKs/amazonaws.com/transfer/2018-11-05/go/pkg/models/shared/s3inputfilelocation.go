package shared

type S3InputFileLocation struct {
	Bucket *string `json:"Bucket,omitempty"`
	Key    *string `json:"Key,omitempty"`
}

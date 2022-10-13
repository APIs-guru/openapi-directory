package shared

type S3InputFileLocation struct {
	Bucket *string `json:"Bucket"`
	Key    *string `json:"Key"`
}

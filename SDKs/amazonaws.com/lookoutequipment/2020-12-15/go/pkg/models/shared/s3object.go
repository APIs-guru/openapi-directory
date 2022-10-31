package shared

type S3Object struct {
	Bucket string `json:"Bucket"`
	Key    string `json:"Key"`
}

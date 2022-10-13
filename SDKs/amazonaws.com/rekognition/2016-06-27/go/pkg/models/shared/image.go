package shared

type Image struct {
	Bytes    *string   `json:"Bytes"`
	S3Object *S3Object `json:"S3Object"`
}

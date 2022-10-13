package shared

type Document struct {
	Bytes    *string   `json:"Bytes"`
	S3Object *S3Object `json:"S3Object"`
}

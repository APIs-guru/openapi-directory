package shared

type Image struct {
	Bytes    *string   `json:"Bytes,omitempty"`
	S3Object *S3Object `json:"S3Object,omitempty"`
}

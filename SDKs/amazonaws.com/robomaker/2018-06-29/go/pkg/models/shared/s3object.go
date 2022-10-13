package shared

type S3Object struct {
	Bucket string  `json:"bucket"`
	Etag   *string `json:"etag"`
	Key    string  `json:"key"`
}

package shared

type S3KeyOutput struct {
	Etag  *string `json:"etag"`
	S3Key *string `json:"s3Key"`
}

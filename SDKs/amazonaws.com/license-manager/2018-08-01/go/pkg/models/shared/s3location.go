package shared

type S3Location struct {
	Bucket    *string `json:"bucket"`
	KeyPrefix *string `json:"keyPrefix"`
}

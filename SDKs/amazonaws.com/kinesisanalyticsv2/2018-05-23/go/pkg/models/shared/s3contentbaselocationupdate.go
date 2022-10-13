package shared

type S3ContentBaseLocationUpdate struct {
	BasePathUpdate  *string `json:"BasePathUpdate"`
	BucketArnUpdate string  `json:"BucketARNUpdate"`
}

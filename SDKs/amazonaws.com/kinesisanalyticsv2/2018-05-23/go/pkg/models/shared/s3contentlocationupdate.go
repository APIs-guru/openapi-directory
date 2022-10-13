package shared

type S3ContentLocationUpdate struct {
	BucketArnUpdate     *string `json:"BucketARNUpdate"`
	FileKeyUpdate       *string `json:"FileKeyUpdate"`
	ObjectVersionUpdate *string `json:"ObjectVersionUpdate"`
}

package shared

type S3ContentLocationUpdate struct {
	BucketArnUpdate     *string `json:"BucketARNUpdate,omitempty"`
	FileKeyUpdate       *string `json:"FileKeyUpdate,omitempty"`
	ObjectVersionUpdate *string `json:"ObjectVersionUpdate,omitempty"`
}

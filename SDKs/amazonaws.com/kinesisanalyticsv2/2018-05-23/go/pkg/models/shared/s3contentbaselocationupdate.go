package shared

// S3ContentBaseLocationUpdate
// The information required to update the S3 base location that holds the application.
type S3ContentBaseLocationUpdate struct {
	BasePathUpdate  *string `json:"BasePathUpdate,omitempty"`
	BucketArnUpdate string  `json:"BucketARNUpdate"`
}

package shared

// S3ContentLocationUpdate
// Describes an update for the Amazon S3 code content location for an application.
type S3ContentLocationUpdate struct {
	BucketArnUpdate     *string `json:"BucketARNUpdate,omitempty"`
	FileKeyUpdate       *string `json:"FileKeyUpdate,omitempty"`
	ObjectVersionUpdate *string `json:"ObjectVersionUpdate,omitempty"`
}

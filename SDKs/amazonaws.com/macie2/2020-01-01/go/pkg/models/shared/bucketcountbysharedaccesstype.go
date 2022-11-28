package shared

// BucketCountBySharedAccessType
// Provides information about the number of S3 buckets that are or aren't shared with other Amazon Web Services accounts.
type BucketCountBySharedAccessType struct {
	External  *int64 `json:"external,omitempty"`
	Internal  *int64 `json:"internal,omitempty"`
	NotShared *int64 `json:"notShared,omitempty"`
	Unknown   *int64 `json:"unknown,omitempty"`
}

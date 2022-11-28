package shared

// BucketCountByEffectivePermission
// Provides information about the number of S3 buckets that are publicly accessible based on a combination of permissions settings for each bucket.
type BucketCountByEffectivePermission struct {
	PubliclyAccessible *int64 `json:"publiclyAccessible,omitempty"`
	PubliclyReadable   *int64 `json:"publiclyReadable,omitempty"`
	PubliclyWritable   *int64 `json:"publiclyWritable,omitempty"`
	Unknown            *int64 `json:"unknown,omitempty"`
}

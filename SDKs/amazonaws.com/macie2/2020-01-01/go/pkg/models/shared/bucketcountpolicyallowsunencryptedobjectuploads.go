package shared

// BucketCountPolicyAllowsUnencryptedObjectUploads
// Provides information about the number of S3 buckets whose bucket policies do or don't require server-side encryption of objects when objects are uploaded to the buckets.
type BucketCountPolicyAllowsUnencryptedObjectUploads struct {
	AllowsUnencryptedObjectUploads *int64 `json:"allowsUnencryptedObjectUploads,omitempty"`
	DeniesUnencryptedObjectUploads *int64 `json:"deniesUnencryptedObjectUploads,omitempty"`
	Unknown                        *int64 `json:"unknown,omitempty"`
}

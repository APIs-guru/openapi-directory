package shared

type BucketCountPolicyAllowsUnencryptedObjectUploads struct {
	AllowsUnencryptedObjectUploads *int64 `json:"allowsUnencryptedObjectUploads"`
	DeniesUnencryptedObjectUploads *int64 `json:"deniesUnencryptedObjectUploads"`
	Unknown                        *int64 `json:"unknown"`
}

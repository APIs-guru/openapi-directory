package shared



type BucketCountPolicyAllowsUnencryptedObjectUploads struct {
    AllowsUnencryptedObjectUploads *int64 `json:"allowsUnencryptedObjectUploads,omitempty"`
    DeniesUnencryptedObjectUploads *int64 `json:"deniesUnencryptedObjectUploads,omitempty"`
    Unknown *int64 `json:"unknown,omitempty"`
    
}


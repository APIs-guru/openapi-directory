package shared



type BucketCountByEffectivePermission struct {
    PubliclyAccessible *int64 `json:"publiclyAccessible,omitempty"`
    PubliclyReadable *int64 `json:"publiclyReadable,omitempty"`
    PubliclyWritable *int64 `json:"publiclyWritable,omitempty"`
    Unknown *int64 `json:"unknown,omitempty"`
    
}


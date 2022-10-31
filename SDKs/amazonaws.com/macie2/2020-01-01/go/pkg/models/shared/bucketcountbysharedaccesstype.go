package shared



type BucketCountBySharedAccessType struct {
    External *int64 `json:"external,omitempty"`
    Internal *int64 `json:"internal,omitempty"`
    NotShared *int64 `json:"notShared,omitempty"`
    Unknown *int64 `json:"unknown,omitempty"`
    
}


package shared



type RowAccessPolicy struct {
    CreationTime *string `json:"creationTime,omitempty"`
    Etag *string `json:"etag,omitempty"`
    FilterPredicate *string `json:"filterPredicate,omitempty"`
    LastModifiedTime *string `json:"lastModifiedTime,omitempty"`
    RowAccessPolicyReference *RowAccessPolicyReference `json:"rowAccessPolicyReference,omitempty"`
    
}


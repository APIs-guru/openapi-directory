package shared



type BucketPolicy struct {
    AllowsPublicReadAccess *bool `json:"allowsPublicReadAccess,omitempty"`
    AllowsPublicWriteAccess *bool `json:"allowsPublicWriteAccess,omitempty"`
    
}


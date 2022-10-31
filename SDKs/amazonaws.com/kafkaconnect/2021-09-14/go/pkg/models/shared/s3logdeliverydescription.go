package shared



type S3LogDeliveryDescription struct {
    Bucket *string `json:"bucket,omitempty"`
    Enabled *bool `json:"enabled,omitempty"`
    Prefix *string `json:"prefix,omitempty"`
    
}


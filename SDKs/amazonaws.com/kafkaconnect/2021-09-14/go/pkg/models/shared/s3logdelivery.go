package shared



type S3LogDelivery struct {
    Bucket *string `json:"bucket,omitempty"`
    Enabled bool `json:"enabled"`
    Prefix *string `json:"prefix,omitempty"`
    
}


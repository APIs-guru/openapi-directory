package shared



type S3Object struct {
    Bucket *string `json:"Bucket,omitempty"`
    Name *string `json:"Name,omitempty"`
    Version *string `json:"Version,omitempty"`
    
}


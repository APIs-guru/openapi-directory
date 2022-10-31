package shared



type Document struct {
    Bytes *string `json:"Bytes,omitempty"`
    S3Object *S3Object `json:"S3Object,omitempty"`
    
}


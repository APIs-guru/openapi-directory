package shared



type S3Object struct {
    Bucket string `json:"bucket"`
    Etag *string `json:"etag,omitempty"`
    Key string `json:"key"`
    
}


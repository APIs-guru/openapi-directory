package shared



type S3Reference struct {
    Bucket string `json:"bucket"`
    Key string `json:"key"`
    ObjectVersion *string `json:"objectVersion,omitempty"`
    
}


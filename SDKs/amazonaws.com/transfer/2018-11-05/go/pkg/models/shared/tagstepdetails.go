package shared



type TagStepDetails struct {
    Name *string `json:"Name,omitempty"`
    Tags []S3Tag `json:"Tags,omitempty"`
    
}


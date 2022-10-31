package shared



type InferenceS3OutputConfiguration struct {
    Bucket string `json:"Bucket"`
    Prefix *string `json:"Prefix,omitempty"`
    
}


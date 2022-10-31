package shared



type MetricsSource struct {
    ContentDigest *string `json:"ContentDigest,omitempty"`
    ContentType string `json:"ContentType"`
    S3URI string `json:"S3Uri"`
    
}


package shared



type DataSourceConfig struct {
    Name string `json:"name"`
    S3Bucket string `json:"s3Bucket"`
    S3Keys []string `json:"s3Keys"`
    
}


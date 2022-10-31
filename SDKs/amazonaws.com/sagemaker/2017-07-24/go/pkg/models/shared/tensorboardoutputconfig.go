package shared



type TensorBoardOutputConfig struct {
    LocalPath *string `json:"LocalPath,omitempty"`
    S3OutputPath string `json:"S3OutputPath"`
    
}


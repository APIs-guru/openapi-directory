package shared



type ParallelDataConfig struct {
    Format ParallelDataFormatEnum `json:"Format"`
    S3URI string `json:"S3Uri"`
    
}


package shared



type CreateLogStreamRequest struct {
    LogGroupName string `json:"logGroupName"`
    LogStreamName string `json:"logStreamName"`
    
}


package shared



type S3FileUploadStatus struct {
    ErrorDetails *ErrorResponse `json:"errorDetails,omitempty"`
    Node *Node `json:"node,omitempty"`
    Status string `json:"status"`
    
}


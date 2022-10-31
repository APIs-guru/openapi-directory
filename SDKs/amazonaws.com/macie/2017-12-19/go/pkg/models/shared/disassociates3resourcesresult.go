package shared



type DisassociateS3ResourcesResult struct {
    FailedS3Resources []FailedS3Resource `json:"failedS3Resources,omitempty"`
    
}


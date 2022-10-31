package shared



type DescribeReportCreationOutput struct {
    ErrorMessage *string `json:"ErrorMessage,omitempty"`
    S3Location *string `json:"S3Location,omitempty"`
    Status *string `json:"Status,omitempty"`
    
}


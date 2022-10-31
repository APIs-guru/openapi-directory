package shared



type DescribeJobResult struct {
    JobMetadata *JobMetadata `json:"JobMetadata,omitempty"`
    SubJobMetadata []JobMetadata `json:"SubJobMetadata,omitempty"`
    
}


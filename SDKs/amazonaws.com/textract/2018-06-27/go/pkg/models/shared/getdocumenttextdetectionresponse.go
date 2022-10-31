package shared



type GetDocumentTextDetectionResponse struct {
    Blocks []Block `json:"Blocks,omitempty"`
    DetectDocumentTextModelVersion *string `json:"DetectDocumentTextModelVersion,omitempty"`
    DocumentMetadata *DocumentMetadata `json:"DocumentMetadata,omitempty"`
    JobStatus *JobStatusEnum `json:"JobStatus,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    StatusMessage *string `json:"StatusMessage,omitempty"`
    Warnings []Warning `json:"Warnings,omitempty"`
    
}


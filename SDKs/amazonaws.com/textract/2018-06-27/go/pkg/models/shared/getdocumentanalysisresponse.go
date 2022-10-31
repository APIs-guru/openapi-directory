package shared

type GetDocumentAnalysisResponse struct {
	AnalyzeDocumentModelVersion *string           `json:"AnalyzeDocumentModelVersion,omitempty"`
	Blocks                      []Block           `json:"Blocks,omitempty"`
	DocumentMetadata            *DocumentMetadata `json:"DocumentMetadata,omitempty"`
	JobStatus                   *JobStatusEnum    `json:"JobStatus,omitempty"`
	NextToken                   *string           `json:"NextToken,omitempty"`
	StatusMessage               *string           `json:"StatusMessage,omitempty"`
	Warnings                    []Warning         `json:"Warnings,omitempty"`
}

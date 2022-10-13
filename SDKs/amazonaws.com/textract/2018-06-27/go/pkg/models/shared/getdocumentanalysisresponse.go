package shared

type GetDocumentAnalysisResponse struct {
	AnalyzeDocumentModelVersion *string           `json:"AnalyzeDocumentModelVersion"`
	Blocks                      []Block           `json:"Blocks"`
	DocumentMetadata            *DocumentMetadata `json:"DocumentMetadata"`
	JobStatus                   *JobStatusEnum    `json:"JobStatus"`
	NextToken                   *string           `json:"NextToken"`
	StatusMessage               *string           `json:"StatusMessage"`
	Warnings                    []Warning         `json:"Warnings"`
}

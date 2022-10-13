package shared

type GetDocumentTextDetectionResponse struct {
	Blocks                         []Block           `json:"Blocks"`
	DetectDocumentTextModelVersion *string           `json:"DetectDocumentTextModelVersion"`
	DocumentMetadata               *DocumentMetadata `json:"DocumentMetadata"`
	JobStatus                      *JobStatusEnum    `json:"JobStatus"`
	NextToken                      *string           `json:"NextToken"`
	StatusMessage                  *string           `json:"StatusMessage"`
	Warnings                       []Warning         `json:"Warnings"`
}

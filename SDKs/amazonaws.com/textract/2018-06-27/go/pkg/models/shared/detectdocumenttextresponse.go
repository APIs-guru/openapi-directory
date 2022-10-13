package shared

type DetectDocumentTextResponse struct {
	Blocks                         []Block           `json:"Blocks"`
	DetectDocumentTextModelVersion *string           `json:"DetectDocumentTextModelVersion"`
	DocumentMetadata               *DocumentMetadata `json:"DocumentMetadata"`
}

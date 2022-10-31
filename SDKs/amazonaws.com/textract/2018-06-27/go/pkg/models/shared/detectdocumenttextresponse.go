package shared



type DetectDocumentTextResponse struct {
    Blocks []Block `json:"Blocks,omitempty"`
    DetectDocumentTextModelVersion *string `json:"DetectDocumentTextModelVersion,omitempty"`
    DocumentMetadata *DocumentMetadata `json:"DocumentMetadata,omitempty"`
    
}


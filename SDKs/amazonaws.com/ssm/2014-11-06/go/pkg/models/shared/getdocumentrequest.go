package shared



type GetDocumentRequest struct {
    DocumentFormat *DocumentFormatEnum `json:"DocumentFormat,omitempty"`
    DocumentVersion *string `json:"DocumentVersion,omitempty"`
    Name string `json:"Name"`
    VersionName *string `json:"VersionName,omitempty"`
    
}


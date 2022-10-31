package shared



type UpdateDocumentRequest struct {
    Attachments []AttachmentsSource `json:"Attachments,omitempty"`
    Content string `json:"Content"`
    DisplayName *string `json:"DisplayName,omitempty"`
    DocumentFormat *DocumentFormatEnum `json:"DocumentFormat,omitempty"`
    DocumentVersion *string `json:"DocumentVersion,omitempty"`
    Name string `json:"Name"`
    TargetType *string `json:"TargetType,omitempty"`
    VersionName *string `json:"VersionName,omitempty"`
    
}


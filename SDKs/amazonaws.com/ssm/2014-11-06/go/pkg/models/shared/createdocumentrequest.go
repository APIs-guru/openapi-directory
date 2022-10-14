package shared

type CreateDocumentRequest struct {
	Attachments    []AttachmentsSource `json:"Attachments,omitempty"`
	Content        string              `json:"Content"`
	DisplayName    *string             `json:"DisplayName,omitempty"`
	DocumentFormat *DocumentFormatEnum `json:"DocumentFormat,omitempty"`
	DocumentType   *DocumentTypeEnum   `json:"DocumentType,omitempty"`
	Name           string              `json:"Name"`
	Requires       []DocumentRequires  `json:"Requires,omitempty"`
	Tags           []Tag               `json:"Tags,omitempty"`
	TargetType     *string             `json:"TargetType,omitempty"`
	VersionName    *string             `json:"VersionName,omitempty"`
}

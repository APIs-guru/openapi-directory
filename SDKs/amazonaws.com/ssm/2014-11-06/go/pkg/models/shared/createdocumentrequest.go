package shared

type CreateDocumentRequest struct {
	Attachments    []AttachmentsSource `json:"Attachments"`
	Content        string              `json:"Content"`
	DisplayName    *string             `json:"DisplayName"`
	DocumentFormat *DocumentFormatEnum `json:"DocumentFormat"`
	DocumentType   *DocumentTypeEnum   `json:"DocumentType"`
	Name           string              `json:"Name"`
	Requires       []DocumentRequires  `json:"Requires"`
	Tags           []Tag               `json:"Tags"`
	TargetType     *string             `json:"TargetType"`
	VersionName    *string             `json:"VersionName"`
}

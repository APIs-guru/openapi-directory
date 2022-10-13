package shared

type UpdateDocumentRequest struct {
	Attachments     []AttachmentsSource `json:"Attachments"`
	Content         string              `json:"Content"`
	DisplayName     *string             `json:"DisplayName"`
	DocumentFormat  *DocumentFormatEnum `json:"DocumentFormat"`
	DocumentVersion *string             `json:"DocumentVersion"`
	Name            string              `json:"Name"`
	TargetType      *string             `json:"TargetType"`
	VersionName     *string             `json:"VersionName"`
}

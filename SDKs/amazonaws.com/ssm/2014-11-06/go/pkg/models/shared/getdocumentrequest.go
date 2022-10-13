package shared

type GetDocumentRequest struct {
	DocumentFormat  *DocumentFormatEnum `json:"DocumentFormat"`
	DocumentVersion *string             `json:"DocumentVersion"`
	Name            string              `json:"Name"`
	VersionName     *string             `json:"VersionName"`
}

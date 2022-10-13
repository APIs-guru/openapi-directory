package shared

type DeleteDocumentRequest struct {
	DocumentVersion *string `json:"DocumentVersion"`
	Force           *bool   `json:"Force"`
	Name            string  `json:"Name"`
	VersionName     *string `json:"VersionName"`
}

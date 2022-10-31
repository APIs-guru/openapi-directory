package shared

type DeleteDocumentRequest struct {
	DocumentVersion *string `json:"DocumentVersion,omitempty"`
	Force           *bool   `json:"Force,omitempty"`
	Name            string  `json:"Name"`
	VersionName     *string `json:"VersionName,omitempty"`
}

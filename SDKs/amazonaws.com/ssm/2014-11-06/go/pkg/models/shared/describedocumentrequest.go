package shared

type DescribeDocumentRequest struct {
	DocumentVersion *string `json:"DocumentVersion,omitempty"`
	Name            string  `json:"Name"`
	VersionName     *string `json:"VersionName,omitempty"`
}

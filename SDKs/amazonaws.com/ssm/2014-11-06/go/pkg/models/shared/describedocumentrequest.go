package shared

type DescribeDocumentRequest struct {
	DocumentVersion *string `json:"DocumentVersion"`
	Name            string  `json:"Name"`
	VersionName     *string `json:"VersionName"`
}

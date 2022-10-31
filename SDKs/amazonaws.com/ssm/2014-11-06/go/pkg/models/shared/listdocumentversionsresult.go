package shared

type ListDocumentVersionsResult struct {
	DocumentVersions []DocumentVersionInfo `json:"DocumentVersions,omitempty"`
	NextToken        *string               `json:"NextToken,omitempty"`
}

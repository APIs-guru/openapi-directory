package shared

type ListDocumentVersionsResult struct {
	DocumentVersions []DocumentVersionInfo `json:"DocumentVersions"`
	NextToken        *string               `json:"NextToken"`
}

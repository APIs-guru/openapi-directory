package shared

type ListDocumentsResult struct {
	DocumentIdentifiers []DocumentIdentifier `json:"DocumentIdentifiers"`
	NextToken           *string              `json:"NextToken"`
}

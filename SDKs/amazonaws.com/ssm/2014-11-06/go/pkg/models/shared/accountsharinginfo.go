package shared

type AccountSharingInfo struct {
	AccountID             *string `json:"AccountId,omitempty"`
	SharedDocumentVersion *string `json:"SharedDocumentVersion,omitempty"`
}

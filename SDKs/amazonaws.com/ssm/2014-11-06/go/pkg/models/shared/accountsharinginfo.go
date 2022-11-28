package shared

// AccountSharingInfo
// Information includes the Amazon Web Services account ID where the current document is shared and the version shared with that account.
type AccountSharingInfo struct {
	AccountID             *string `json:"AccountId,omitempty"`
	SharedDocumentVersion *string `json:"SharedDocumentVersion,omitempty"`
}

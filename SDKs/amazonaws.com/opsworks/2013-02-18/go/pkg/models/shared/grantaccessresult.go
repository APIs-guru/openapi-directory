package shared

// GrantAccessResult
// Contains the response to a <code>GrantAccess</code> request.
type GrantAccessResult struct {
	TemporaryCredential *TemporaryCredential `json:"TemporaryCredential,omitempty"`
}

package shared

// SessionContext
// Provides information about a session that was created for an entity that performed an action by using temporary security credentials.
type SessionContext struct {
	Attributes    *SessionContextAttributes `json:"attributes,omitempty"`
	SessionIssuer *SessionIssuer            `json:"sessionIssuer,omitempty"`
}

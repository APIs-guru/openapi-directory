package shared

// UserDetails
// Specifies the user name, server ID, and session ID for a workflow.
type UserDetails struct {
	ServerID  string  `json:"ServerId"`
	SessionID *string `json:"SessionId,omitempty"`
	UserName  string  `json:"UserName"`
}

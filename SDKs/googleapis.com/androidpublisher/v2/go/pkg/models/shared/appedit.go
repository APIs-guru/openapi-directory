package shared

// AppEdit
// Represents an edit of an app. An edit allows clients to make multiple changes before committing them in one operation.
type AppEdit struct {
	ExpiryTimeSeconds *string `json:"expiryTimeSeconds,omitempty"`
	ID                *string `json:"id,omitempty"`
}

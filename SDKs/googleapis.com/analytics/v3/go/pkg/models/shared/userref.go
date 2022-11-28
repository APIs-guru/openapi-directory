package shared

// UserRef
// JSON template for a user reference.
type UserRef struct {
	Email *string `json:"email,omitempty"`
	ID    *string `json:"id,omitempty"`
	Kind  *string `json:"kind,omitempty"`
}

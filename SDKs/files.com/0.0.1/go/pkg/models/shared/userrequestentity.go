package shared

// UserRequestEntity
// Create User Request
type UserRequestEntity struct {
	Details *string `json:"details,omitempty"`
	Email   *string `json:"email,omitempty"`
	ID      *int32  `json:"id,omitempty"`
	Name    *string `json:"name,omitempty"`
}

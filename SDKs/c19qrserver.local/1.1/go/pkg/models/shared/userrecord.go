package shared

// UserRecord
// A team member user record
type UserRecord struct {
	Admin    *bool   `json:"admin,omitempty"`
	Email    *string `json:"email,omitempty"`
	ID       *int64  `json:"id,omitempty"`
	Name     *string `json:"name,omitempty"`
	ReadOnly *bool   `json:"read_only,omitempty"`
}

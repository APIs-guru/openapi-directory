package shared

// LoginResponse
// Payload of successful login
type LoginResponse struct {
	Admin    *bool   `json:"admin,omitempty"`
	LoginID  *int64  `json:"login_id,omitempty"`
	Name     *string `json:"name,omitempty"`
	ReadOnly *bool   `json:"read_only,omitempty"`
	Token    *string `json:"token,omitempty"`
}

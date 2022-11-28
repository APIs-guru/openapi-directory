package shared

// UpdateUserAccountRequest
// Request model for updating user account information
type UpdateUserAccountRequest struct {
	AcceptEula *bool   `json:"acceptEULA,omitempty"`
	Email      *string `json:"email,omitempty"`
	FirstName  *string `json:"firstName,omitempty"`
	Gender     *string `json:"gender,omitempty"`
	Language   *string `json:"language,omitempty"`
	LastName   *string `json:"lastName,omitempty"`
	Login      *string `json:"login,omitempty"`
	Phone      *string `json:"phone,omitempty"`
	Title      *string `json:"title,omitempty"`
	UserName   *string `json:"userName,omitempty"`
}

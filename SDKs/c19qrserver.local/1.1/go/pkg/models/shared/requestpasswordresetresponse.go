package shared

// RequestPasswordResetResponse
// This object contains the password reset code for the user
type RequestPasswordResetResponse struct {
	Email *string `json:"email,omitempty"`
	GUID  *string `json:"guid,omitempty"`
}

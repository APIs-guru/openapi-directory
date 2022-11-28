package shared

// ChangeUserPasswordRequest
// Request model for updating user's password
type ChangeUserPasswordRequest struct {
	NewPassword string `json:"newPassword"`
	OldPassword string `json:"oldPassword"`
}

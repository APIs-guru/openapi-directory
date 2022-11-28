package shared

// PendingUserData
// Pending user information
type PendingUserData struct {
	DisplayName string `json:"displayName"`
	Email       string `json:"email"`
	ID          int64  `json:"id"`
	Login       string `json:"login"`
}

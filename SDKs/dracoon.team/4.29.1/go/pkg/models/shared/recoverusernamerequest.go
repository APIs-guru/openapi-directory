package shared

// RecoverUserNameRequest
// Recover usernames for email
type RecoverUserNameRequest struct {
	CreatorLanguage *string `json:"creatorLanguage,omitempty"`
	Email           string  `json:"email"`
}

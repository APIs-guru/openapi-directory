package shared

// VerificationCode
// The Directory API allows you to view, generate, and invalidate backup verification codes for a user.
type VerificationCode struct {
	Etag             *string `json:"etag,omitempty"`
	Kind             *string `json:"kind,omitempty"`
	UserID           *string `json:"userId,omitempty"`
	VerificationCode *string `json:"verificationCode,omitempty"`
}

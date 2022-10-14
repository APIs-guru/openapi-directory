package shared

type RecoverUserNameRequest struct {
	CreatorLanguage *string `json:"creatorLanguage,omitempty"`
	Email           string  `json:"email"`
}

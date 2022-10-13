package shared

type RecoverUserNameRequest struct {
	CreatorLanguage *string `json:"creatorLanguage"`
	Email           string  `json:"email"`
}

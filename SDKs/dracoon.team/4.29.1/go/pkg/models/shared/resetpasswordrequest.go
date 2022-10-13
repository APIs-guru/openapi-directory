package shared

type ResetPasswordRequest struct {
	CreatorLanguage *string `json:"creatorLanguage"`
	Language        *string `json:"language"`
	Login           *string `json:"login"`
	UserName        *string `json:"userName"`
}

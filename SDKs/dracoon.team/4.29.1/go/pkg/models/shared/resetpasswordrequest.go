package shared

type ResetPasswordRequest struct {
	CreatorLanguage *string `json:"creatorLanguage,omitempty"`
	Language        *string `json:"language,omitempty"`
	Login           *string `json:"login,omitempty"`
	UserName        *string `json:"userName,omitempty"`
}

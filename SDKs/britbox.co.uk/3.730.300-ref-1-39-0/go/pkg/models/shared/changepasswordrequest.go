package shared

type ChangePasswordRequest struct {
	Password     string `json:"password"`
	ProfileToken string `json:"profileToken"`
}

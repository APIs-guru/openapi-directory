package shared

type ResetPasswordRequest struct {
	OrganizationID string `json:"OrganizationId"`
	Password       string `json:"Password"`
	UserID         string `json:"UserId"`
}

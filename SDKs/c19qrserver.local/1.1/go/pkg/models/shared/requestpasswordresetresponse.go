package shared

type RequestPasswordResetResponse struct {
	Email *string `json:"email"`
	GUID  *string `json:"guid"`
}

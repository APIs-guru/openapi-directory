package shared

type RequestPasswordResetResponse struct {
	Email *string `json:"email,omitempty"`
	GUID  *string `json:"guid,omitempty"`
}

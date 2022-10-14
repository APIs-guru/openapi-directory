package shared

type GetServiceAccountResponse struct {
	Email *string `json:"email,omitempty"`
	Kind  *string `json:"kind,omitempty"`
}

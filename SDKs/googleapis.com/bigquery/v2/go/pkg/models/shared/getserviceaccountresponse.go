package shared

type GetServiceAccountResponse struct {
	Email *string `json:"email"`
	Kind  *string `json:"kind"`
}

package shared

type UpdateMailboxPasswordRequest struct {
	Password *string `json:"password,omitempty"`
}

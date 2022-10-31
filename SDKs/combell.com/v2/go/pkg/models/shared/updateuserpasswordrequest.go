package shared

type UpdateUserPasswordRequest struct {
	Password *string `json:"password,omitempty"`
}

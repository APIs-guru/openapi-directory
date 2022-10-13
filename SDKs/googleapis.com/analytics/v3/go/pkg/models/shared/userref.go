package shared

type UserRef struct {
	Email *string `json:"email"`
	ID    *string `json:"id"`
	Kind  *string `json:"kind"`
}

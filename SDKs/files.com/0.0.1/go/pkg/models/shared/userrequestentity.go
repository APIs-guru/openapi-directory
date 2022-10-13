package shared

type UserRequestEntity struct {
	Details *string `json:"details"`
	Email   *string `json:"email"`
	ID      *int32  `json:"id"`
	Name    *string `json:"name"`
}

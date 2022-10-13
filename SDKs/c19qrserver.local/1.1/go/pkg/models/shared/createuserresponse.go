package shared

type CreateUserResponse struct {
	Email *string `json:"email"`
	GUID  *string `json:"guid"`
}

package shared

type UpdateUserAccountRequest struct {
	AcceptEula *bool   `json:"acceptEULA"`
	Email      *string `json:"email"`
	FirstName  *string `json:"firstName"`
	Gender     *string `json:"gender"`
	Language   *string `json:"language"`
	LastName   *string `json:"lastName"`
	Login      *string `json:"login"`
	Phone      *string `json:"phone"`
	Title      *string `json:"title"`
	UserName   *string `json:"userName"`
}

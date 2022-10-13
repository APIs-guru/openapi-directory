package shared

type User struct {
	FirstName  *string `json:"first_name"`
	LastName   *string `json:"last_name"`
	MiddleName *string `json:"middle_name"`
	Username   *string `json:"username"`
}

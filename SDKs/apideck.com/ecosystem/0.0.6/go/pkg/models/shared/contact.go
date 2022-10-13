package shared

type Contact struct {
	Email     *string `json:"email"`
	FirstName *string `json:"first_name"`
	ID        *string `json:"id"`
	LastName  *string `json:"last_name"`
	LinkedIn  *string `json:"linked_in"`
	Name      string  `json:"name"`
	Role      *string `json:"role"`
	Twitter   *string `json:"twitter"`
}

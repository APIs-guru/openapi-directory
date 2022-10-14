package shared

type Contact struct {
	Email     *string `json:"email,omitempty"`
	FirstName *string `json:"first_name,omitempty"`
	ID        *string `json:"id,omitempty"`
	LastName  *string `json:"last_name,omitempty"`
	LinkedIn  *string `json:"linked_in,omitempty"`
	Name      string  `json:"name"`
	Role      *string `json:"role,omitempty"`
	Twitter   *string `json:"twitter,omitempty"`
}

package shared

type User struct {
	Addresses      []Address     `json:"addresses"`
	CompanyName    *string       `json:"company_name"`
	CreatedAt      *string       `json:"created_at"`
	Department     *string       `json:"department"`
	Description    *string       `json:"description"`
	Division       *string       `json:"division"`
	Emails         []Email       `json:"emails"`
	EmployeeNumber *string       `json:"employee_number"`
	FirstName      *string       `json:"first_name"`
	ID             *string       `json:"id"`
	Image          *string       `json:"image"`
	Language       *string       `json:"language"`
	LastName       *string       `json:"last_name"`
	ParentID       *string       `json:"parent_id"`
	Password       *string       `json:"password"`
	PhoneNumbers   []PhoneNumber `json:"phone_numbers"`
	Status         *string       `json:"status"`
	Title          *string       `json:"title"`
	UpdatedAt      *string       `json:"updated_at"`
	Username       *string       `json:"username"`
}

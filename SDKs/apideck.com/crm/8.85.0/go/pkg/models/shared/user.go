package shared

type UserOutput struct {
	Addresses      []Address     `json:"addresses,omitempty"`
	CompanyName    *string       `json:"company_name,omitempty"`
	CreatedAt      *string       `json:"created_at,omitempty"`
	Department     *string       `json:"department,omitempty"`
	Description    *string       `json:"description,omitempty"`
	Division       *string       `json:"division,omitempty"`
	Emails         []Email       `json:"emails"`
	EmployeeNumber *string       `json:"employee_number,omitempty"`
	FirstName      *string       `json:"first_name,omitempty"`
	ID             *string       `json:"id,omitempty"`
	Image          *string       `json:"image,omitempty"`
	Language       *string       `json:"language,omitempty"`
	LastName       *string       `json:"last_name,omitempty"`
	ParentID       *string       `json:"parent_id,omitempty"`
	PhoneNumbers   []PhoneNumber `json:"phone_numbers,omitempty"`
	Status         *string       `json:"status,omitempty"`
	Title          *string       `json:"title,omitempty"`
	UpdatedAt      *string       `json:"updated_at,omitempty"`
	Username       *string       `json:"username,omitempty"`
}

type UserInput struct {
	Addresses      []Address     `json:"addresses,omitempty"`
	CompanyName    *string       `json:"company_name,omitempty"`
	Department     *string       `json:"department,omitempty"`
	Description    *string       `json:"description,omitempty"`
	Division       *string       `json:"division,omitempty"`
	Emails         []Email       `json:"emails"`
	EmployeeNumber *string       `json:"employee_number,omitempty"`
	FirstName      *string       `json:"first_name,omitempty"`
	Image          *string       `json:"image,omitempty"`
	Language       *string       `json:"language,omitempty"`
	LastName       *string       `json:"last_name,omitempty"`
	ParentID       *string       `json:"parent_id,omitempty"`
	Password       *string       `json:"password,omitempty"`
	PhoneNumbers   []PhoneNumber `json:"phone_numbers,omitempty"`
	Status         *string       `json:"status,omitempty"`
	Title          *string       `json:"title,omitempty"`
	Username       *string       `json:"username,omitempty"`
}

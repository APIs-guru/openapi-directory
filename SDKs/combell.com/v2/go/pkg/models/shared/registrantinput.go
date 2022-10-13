package shared

type RegistrantInput struct {
	Address          *string      `json:"address"`
	City             *string      `json:"city"`
	CompanyName      *string      `json:"company_name"`
	CountryCode      *string      `json:"country_code"`
	Email            *string      `json:"email"`
	EnterpriseNumber *string      `json:"enterprise_number"`
	ExtraFields      []ExtraField `json:"extra_fields"`
	Fax              *string      `json:"fax"`
	FirstName        *string      `json:"first_name"`
	LanguageCode     *string      `json:"language_code"`
	LastName         *string      `json:"last_name"`
	Phone            *string      `json:"phone"`
	PostalCode       *string      `json:"postal_code"`
}

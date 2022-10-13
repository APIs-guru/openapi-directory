package shared

type Lead struct {
	Addresses      []Address     `json:"addresses"`
	CompanyID      *string       `json:"company_id"`
	CompanyName    string        `json:"company_name"`
	ContactID      *string       `json:"contact_id"`
	CreatedAt      *string       `json:"created_at"`
	Currency       *CurrencyEnum `json:"currency"`
	CustomFields   []CustomField `json:"custom_fields"`
	Description    *string       `json:"description"`
	Emails         []Email       `json:"emails"`
	Fax            *string       `json:"fax"`
	FirstName      *string       `json:"first_name"`
	ID             *string       `json:"id"`
	Language       *string       `json:"language"`
	LastName       *string       `json:"last_name"`
	LeadSource     *string       `json:"lead_source"`
	MonetaryAmount *float64      `json:"monetary_amount"`
	Name           string        `json:"name"`
	OwnerID        *string       `json:"owner_id"`
	PhoneNumbers   []PhoneNumber `json:"phone_numbers"`
	Prefix         *string       `json:"prefix"`
	SocialLinks    []SocialLink  `json:"social_links"`
	Status         *string       `json:"status"`
	Tags           []string      `json:"tags"`
	Title          *string       `json:"title"`
	UpdatedAt      *string       `json:"updated_at"`
	Websites       []Website     `json:"websites"`
}

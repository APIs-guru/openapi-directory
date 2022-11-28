package shared

type LeadInput struct {
	Addresses      []Address     `json:"addresses,omitempty"`
	CompanyID      *string       `json:"company_id,omitempty"`
	CompanyName    string        `json:"company_name"`
	ContactID      *string       `json:"contact_id,omitempty"`
	Currency       *CurrencyEnum `json:"currency,omitempty"`
	CustomFields   []CustomField `json:"custom_fields,omitempty"`
	Description    *string       `json:"description,omitempty"`
	Emails         []Email       `json:"emails,omitempty"`
	Fax            *string       `json:"fax,omitempty"`
	FirstName      *string       `json:"first_name,omitempty"`
	Language       *string       `json:"language,omitempty"`
	LastName       *string       `json:"last_name,omitempty"`
	LeadSource     *string       `json:"lead_source,omitempty"`
	MonetaryAmount *float64      `json:"monetary_amount,omitempty"`
	Name           string        `json:"name"`
	OwnerID        *string       `json:"owner_id,omitempty"`
	PhoneNumbers   []PhoneNumber `json:"phone_numbers,omitempty"`
	Prefix         *string       `json:"prefix,omitempty"`
	SocialLinks    []SocialLink  `json:"social_links,omitempty"`
	Status         *string       `json:"status,omitempty"`
	Tags           []string      `json:"tags,omitempty"`
	Title          *string       `json:"title,omitempty"`
	Websites       []Website     `json:"websites,omitempty"`
}

type Lead struct {
	Addresses      []Address     `json:"addresses,omitempty"`
	CompanyID      *string       `json:"company_id,omitempty"`
	CompanyName    string        `json:"company_name"`
	ContactID      *string       `json:"contact_id,omitempty"`
	CreatedAt      *string       `json:"created_at,omitempty"`
	Currency       *CurrencyEnum `json:"currency,omitempty"`
	CustomFields   []CustomField `json:"custom_fields,omitempty"`
	Description    *string       `json:"description,omitempty"`
	Emails         []Email       `json:"emails,omitempty"`
	Fax            *string       `json:"fax,omitempty"`
	FirstName      *string       `json:"first_name,omitempty"`
	ID             *string       `json:"id,omitempty"`
	Language       *string       `json:"language,omitempty"`
	LastName       *string       `json:"last_name,omitempty"`
	LeadSource     *string       `json:"lead_source,omitempty"`
	MonetaryAmount *float64      `json:"monetary_amount,omitempty"`
	Name           string        `json:"name"`
	OwnerID        *string       `json:"owner_id,omitempty"`
	PhoneNumbers   []PhoneNumber `json:"phone_numbers,omitempty"`
	Prefix         *string       `json:"prefix,omitempty"`
	SocialLinks    []SocialLink  `json:"social_links,omitempty"`
	Status         *string       `json:"status,omitempty"`
	Tags           []string      `json:"tags,omitempty"`
	Title          *string       `json:"title,omitempty"`
	UpdatedAt      *string       `json:"updated_at,omitempty"`
	Websites       []Website     `json:"websites,omitempty"`
}

package shared

type OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient struct {
	Address1        string  `json:"address1"`
	Address2        *string `json:"address2,omitempty"`
	AddressLocality string  `json:"addressLocality"`
	AddressRegion   string  `json:"addressRegion"`
	CompanyName     *string `json:"companyName,omitempty"`
	Country         string  `json:"country"`
	Email           string  `json:"email"`
	FirstName       string  `json:"firstName"`
	LastName        string  `json:"lastName"`
	Phone           string  `json:"phone"`
	PostalCode      *string `json:"postalCode,omitempty"`
}

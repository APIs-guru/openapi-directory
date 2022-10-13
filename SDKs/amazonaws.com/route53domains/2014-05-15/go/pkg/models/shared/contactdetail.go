package shared

type ContactDetail struct {
	AddressLine1     *string          `json:"AddressLine1"`
	AddressLine2     *string          `json:"AddressLine2"`
	City             *string          `json:"City"`
	ContactType      *ContactTypeEnum `json:"ContactType"`
	CountryCode      *CountryCodeEnum `json:"CountryCode"`
	Email            *string          `json:"Email"`
	ExtraParams      []ExtraParam     `json:"ExtraParams"`
	Fax              *string          `json:"Fax"`
	FirstName        *string          `json:"FirstName"`
	LastName         *string          `json:"LastName"`
	OrganizationName *string          `json:"OrganizationName"`
	PhoneNumber      *string          `json:"PhoneNumber"`
	State            *string          `json:"State"`
	ZipCode          *string          `json:"ZipCode"`
}

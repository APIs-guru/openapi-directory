package shared

type BuildingAddress struct {
	AddressLines       []string `json:"addressLines,omitempty"`
	AdministrativeArea *string  `json:"administrativeArea,omitempty"`
	LanguageCode       *string  `json:"languageCode,omitempty"`
	Locality           *string  `json:"locality,omitempty"`
	PostalCode         *string  `json:"postalCode,omitempty"`
	RegionCode         *string  `json:"regionCode,omitempty"`
	Sublocality        *string  `json:"sublocality,omitempty"`
}

package shared

type BuildingAddress struct {
	AddressLines       []string `json:"addressLines"`
	AdministrativeArea *string  `json:"administrativeArea"`
	LanguageCode       *string  `json:"languageCode"`
	Locality           *string  `json:"locality"`
	PostalCode         *string  `json:"postalCode"`
	RegionCode         *string  `json:"regionCode"`
	Sublocality        *string  `json:"sublocality"`
}

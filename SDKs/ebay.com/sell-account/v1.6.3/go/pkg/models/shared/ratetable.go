package shared

type RateTable struct {
	CountryCode *string `json:"countryCode,omitempty"`
	Locality    *string `json:"locality,omitempty"`
	Name        *string `json:"name,omitempty"`
	RateTableID *string `json:"rateTableId,omitempty"`
}

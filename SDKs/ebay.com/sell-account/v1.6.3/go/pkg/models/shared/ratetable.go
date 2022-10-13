package shared

type RateTable struct {
	CountryCode *string `json:"countryCode"`
	Locality    *string `json:"locality"`
	Name        *string `json:"name"`
	RateTableID *string `json:"rateTableId"`
}

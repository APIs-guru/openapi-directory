package shared

// RateTable
// A complex type that contains information pertaining to a shipping rate table.
type RateTable struct {
	CountryCode *string `json:"countryCode,omitempty"`
	Locality    *string `json:"locality,omitempty"`
	Name        *string `json:"name,omitempty"`
	RateTableID *string `json:"rateTableId,omitempty"`
}

package shared

// Locale
// Locale
type Locale struct {
	Continent     string `json:"continent"`
	ContinentCode string `json:"continentCode"`
	Country       string `json:"country"`
	CountryCode   string `json:"countryCode"`
	Currency      string `json:"currency"`
	Eu            bool   `json:"eu"`
	IP            string `json:"ip"`
}

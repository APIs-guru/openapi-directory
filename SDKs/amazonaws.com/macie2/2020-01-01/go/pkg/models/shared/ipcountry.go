package shared

// IPCountry
// Provides information about the country that an IP address originated from.
type IPCountry struct {
	Code *string `json:"code,omitempty"`
	Name *string `json:"name,omitempty"`
}

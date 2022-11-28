package shared

// DomainSuggestion
// Information about one suggested domain name.
type DomainSuggestion struct {
	Availability *string `json:"Availability,omitempty"`
	DomainName   *string `json:"DomainName,omitempty"`
}

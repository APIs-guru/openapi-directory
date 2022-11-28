package shared

// CheckDomainAvailabilityRequest
// The CheckDomainAvailability request contains the following elements.
type CheckDomainAvailabilityRequest struct {
	DomainName  string  `json:"DomainName"`
	IdnLangCode *string `json:"IdnLangCode,omitempty"`
}

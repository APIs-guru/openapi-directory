package shared

// RenewDomainRequest
// A <code>RenewDomain</code> request includes the number of years that you want to renew for and the current expiration year.
type RenewDomainRequest struct {
	CurrentExpiryYear int64  `json:"CurrentExpiryYear"`
	DomainName        string `json:"DomainName"`
	DurationInYears   *int64 `json:"DurationInYears,omitempty"`
}

package shared

type RenewDomainRequest struct {
	CurrentExpiryYear int64  `json:"CurrentExpiryYear"`
	DomainName        string `json:"DomainName"`
	DurationInYears   *int64 `json:"DurationInYears"`
}

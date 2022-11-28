package shared

// DomainIspPlacement
// An object that contains inbox placement data for email sent from one of your email domains to a specific email provider.
type DomainIspPlacement struct {
	InboxPercentage *float64 `json:"InboxPercentage,omitempty"`
	InboxRawCount   *int64   `json:"InboxRawCount,omitempty"`
	IspName         *string  `json:"IspName,omitempty"`
	SpamPercentage  *float64 `json:"SpamPercentage,omitempty"`
	SpamRawCount    *int64   `json:"SpamRawCount,omitempty"`
}

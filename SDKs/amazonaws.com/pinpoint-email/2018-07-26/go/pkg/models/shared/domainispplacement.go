package shared

type DomainIspPlacement struct {
	InboxPercentage *float64 `json:"InboxPercentage"`
	InboxRawCount   *int64   `json:"InboxRawCount"`
	IspName         *string  `json:"IspName"`
	SpamPercentage  *float64 `json:"SpamPercentage"`
	SpamRawCount    *int64   `json:"SpamRawCount"`
}

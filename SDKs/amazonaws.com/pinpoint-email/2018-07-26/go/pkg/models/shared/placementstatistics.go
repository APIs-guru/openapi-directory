package shared

type PlacementStatistics struct {
	DkimPercentage    *float64 `json:"DkimPercentage,omitempty"`
	InboxPercentage   *float64 `json:"InboxPercentage,omitempty"`
	MissingPercentage *float64 `json:"MissingPercentage,omitempty"`
	SpamPercentage    *float64 `json:"SpamPercentage,omitempty"`
	SpfPercentage     *float64 `json:"SpfPercentage,omitempty"`
}

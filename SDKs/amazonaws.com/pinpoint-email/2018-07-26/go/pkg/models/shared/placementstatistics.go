package shared

type PlacementStatistics struct {
	DkimPercentage    *float64 `json:"DkimPercentage"`
	InboxPercentage   *float64 `json:"InboxPercentage"`
	MissingPercentage *float64 `json:"MissingPercentage"`
	SpamPercentage    *float64 `json:"SpamPercentage"`
	SpfPercentage     *float64 `json:"SpfPercentage"`
}

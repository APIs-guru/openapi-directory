package shared

// IspPlacement
// An object that describes how email sent during the predictive inbox placement test was handled by a certain email provider.
type IspPlacement struct {
	IspName             *string              `json:"IspName,omitempty"`
	PlacementStatistics *PlacementStatistics `json:"PlacementStatistics,omitempty"`
}

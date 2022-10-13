package shared

type IspPlacement struct {
	IspName             *string              `json:"IspName"`
	PlacementStatistics *PlacementStatistics `json:"PlacementStatistics"`
}

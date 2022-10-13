package shared

type ListRateBasedRulesRequest struct {
	Limit      *int64  `json:"Limit"`
	NextMarker *string `json:"NextMarker"`
}

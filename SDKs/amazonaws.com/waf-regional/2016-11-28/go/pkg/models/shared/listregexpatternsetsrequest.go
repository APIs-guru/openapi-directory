package shared

type ListRegexPatternSetsRequest struct {
	Limit      *int64  `json:"Limit"`
	NextMarker *string `json:"NextMarker"`
}

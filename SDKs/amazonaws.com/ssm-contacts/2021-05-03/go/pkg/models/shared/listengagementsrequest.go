package shared

type ListEngagementsRequest struct {
	IncidentID     *string    `json:"IncidentId"`
	MaxResults     *int64     `json:"MaxResults"`
	NextToken      *string    `json:"NextToken"`
	TimeRangeValue *TimeRange `json:"TimeRangeValue"`
}

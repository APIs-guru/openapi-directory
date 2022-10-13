package shared

type ListAttacksRequest struct {
	EndTime      *TimeRange `json:"EndTime"`
	MaxResults   *int64     `json:"MaxResults"`
	NextToken    *string    `json:"NextToken"`
	ResourceArns []string   `json:"ResourceArns"`
	StartTime    *TimeRange `json:"StartTime"`
}

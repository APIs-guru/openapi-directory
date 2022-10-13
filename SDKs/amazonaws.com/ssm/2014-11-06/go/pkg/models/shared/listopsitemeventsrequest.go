package shared

type ListOpsItemEventsRequest struct {
	Filters    []OpsItemEventFilter `json:"Filters"`
	MaxResults *int64               `json:"MaxResults"`
	NextToken  *string              `json:"NextToken"`
}

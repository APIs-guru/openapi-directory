package shared

type ListInstancesRequest struct {
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
	ServiceID  string  `json:"ServiceId"`
}

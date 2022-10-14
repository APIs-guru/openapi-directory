package shared

type ListInstancesRequest struct {
	MaxResults *int64  `json:"MaxResults,omitempty"`
	NextToken  *string `json:"NextToken,omitempty"`
	ServiceID  string  `json:"ServiceId"`
}

package shared

type GetInstancesHealthStatusRequest struct {
	Instances  []string `json:"Instances"`
	MaxResults *int64   `json:"MaxResults"`
	NextToken  *string  `json:"NextToken"`
	ServiceID  string   `json:"ServiceId"`
}

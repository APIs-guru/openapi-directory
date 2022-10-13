package shared

type ListCommandsRequest struct {
	CommandID  *string         `json:"CommandId"`
	Filters    []CommandFilter `json:"Filters"`
	InstanceID *string         `json:"InstanceId"`
	MaxResults *int64          `json:"MaxResults"`
	NextToken  *string         `json:"NextToken"`
}

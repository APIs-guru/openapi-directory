package shared

type ListCommandsRequest struct {
	CommandID  *string         `json:"CommandId,omitempty"`
	Filters    []CommandFilter `json:"Filters,omitempty"`
	InstanceID *string         `json:"InstanceId,omitempty"`
	MaxResults *int64          `json:"MaxResults,omitempty"`
	NextToken  *string         `json:"NextToken,omitempty"`
}

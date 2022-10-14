package shared

type ListCommandInvocationsRequest struct {
	CommandID  *string         `json:"CommandId,omitempty"`
	Details    *bool           `json:"Details,omitempty"`
	Filters    []CommandFilter `json:"Filters,omitempty"`
	InstanceID *string         `json:"InstanceId,omitempty"`
	MaxResults *int64          `json:"MaxResults,omitempty"`
	NextToken  *string         `json:"NextToken,omitempty"`
}

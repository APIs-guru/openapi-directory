package shared

type ListCommandInvocationsRequest struct {
	CommandID  *string         `json:"CommandId"`
	Details    *bool           `json:"Details"`
	Filters    []CommandFilter `json:"Filters"`
	InstanceID *string         `json:"InstanceId"`
	MaxResults *int64          `json:"MaxResults"`
	NextToken  *string         `json:"NextToken"`
}

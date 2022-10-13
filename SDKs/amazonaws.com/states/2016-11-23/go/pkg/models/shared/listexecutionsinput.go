package shared

type ListExecutionsInput struct {
	MaxResults      *int64               `json:"maxResults"`
	NextToken       *string              `json:"nextToken"`
	StateMachineArn string               `json:"stateMachineArn"`
	StatusFilter    *ExecutionStatusEnum `json:"statusFilter"`
}

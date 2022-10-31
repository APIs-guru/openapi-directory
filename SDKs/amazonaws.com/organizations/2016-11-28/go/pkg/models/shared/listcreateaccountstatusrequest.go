package shared

type ListCreateAccountStatusRequest struct {
	MaxResults *int64                   `json:"MaxResults,omitempty"`
	NextToken  *string                  `json:"NextToken,omitempty"`
	States     []CreateAccountStateEnum `json:"States,omitempty"`
}

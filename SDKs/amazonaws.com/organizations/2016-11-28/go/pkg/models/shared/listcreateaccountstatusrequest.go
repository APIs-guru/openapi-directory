package shared

type ListCreateAccountStatusRequest struct {
	MaxResults *int64                   `json:"MaxResults"`
	NextToken  *string                  `json:"NextToken"`
	States     []CreateAccountStateEnum `json:"States"`
}

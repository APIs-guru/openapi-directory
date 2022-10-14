package shared

type ListCodeRepositoriesOutput struct {
	CodeRepositorySummaryList []CodeRepositorySummary `json:"CodeRepositorySummaryList"`
	NextToken                 *string                 `json:"NextToken,omitempty"`
}

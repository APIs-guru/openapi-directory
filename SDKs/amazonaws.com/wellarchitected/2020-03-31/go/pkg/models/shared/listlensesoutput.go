package shared

type ListLensesOutput struct {
	LensSummaries []LensSummary `json:"LensSummaries,omitempty"`
	NextToken     *string       `json:"NextToken,omitempty"`
}

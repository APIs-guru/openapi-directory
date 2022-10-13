package shared

type ListLensesOutput struct {
	LensSummaries []LensSummary `json:"LensSummaries"`
	NextToken     *string       `json:"NextToken"`
}

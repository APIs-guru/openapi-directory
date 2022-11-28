package shared

// ListLensesOutput
// Output of a list lenses call.
type ListLensesOutput struct {
	LensSummaries []LensSummary `json:"LensSummaries,omitempty"`
	NextToken     *string       `json:"NextToken,omitempty"`
}

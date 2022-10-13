package shared

type DescribeCasesResponse struct {
	Cases     []CaseDetails `json:"cases"`
	NextToken *string       `json:"nextToken"`
}

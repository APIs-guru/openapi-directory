package shared

type DescribeCasesResponse struct {
	Cases     []CaseDetails `json:"cases,omitempty"`
	NextToken *string       `json:"nextToken,omitempty"`
}

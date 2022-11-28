package shared

// DescribeCasesResponse
// Returns an array of <a href="https://docs.aws.amazon.com/awssupport/latest/APIReference/API_CaseDetails.html">CaseDetails</a> objects and a <code>nextToken</code> that defines a point for pagination in the result set.
type DescribeCasesResponse struct {
	Cases     []CaseDetails `json:"cases,omitempty"`
	NextToken *string       `json:"nextToken,omitempty"`
}

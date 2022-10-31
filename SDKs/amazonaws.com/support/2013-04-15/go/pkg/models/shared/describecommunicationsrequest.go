package shared

type DescribeCommunicationsRequest struct {
	AfterTime  *string `json:"afterTime,omitempty"`
	BeforeTime *string `json:"beforeTime,omitempty"`
	CaseID     string  `json:"caseId"`
	MaxResults *int64  `json:"maxResults,omitempty"`
	NextToken  *string `json:"nextToken,omitempty"`
}

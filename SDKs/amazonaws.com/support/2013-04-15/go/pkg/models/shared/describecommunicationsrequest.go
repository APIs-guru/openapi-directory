package shared

type DescribeCommunicationsRequest struct {
	AfterTime  *string `json:"afterTime"`
	BeforeTime *string `json:"beforeTime"`
	CaseID     string  `json:"caseId"`
	MaxResults *int64  `json:"maxResults"`
	NextToken  *string `json:"nextToken"`
}

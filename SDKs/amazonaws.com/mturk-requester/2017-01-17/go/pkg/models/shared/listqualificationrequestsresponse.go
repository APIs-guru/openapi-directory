package shared

type ListQualificationRequestsResponse struct {
	NextToken             *string                `json:"NextToken,omitempty"`
	NumResults            *int64                 `json:"NumResults,omitempty"`
	QualificationRequests []QualificationRequest `json:"QualificationRequests,omitempty"`
}

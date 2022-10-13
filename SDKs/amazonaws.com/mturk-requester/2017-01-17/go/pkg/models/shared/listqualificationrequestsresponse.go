package shared

type ListQualificationRequestsResponse struct {
	NextToken             *string                `json:"NextToken"`
	NumResults            *int64                 `json:"NumResults"`
	QualificationRequests []QualificationRequest `json:"QualificationRequests"`
}

package shared

type ListQualificationRequestsRequest struct {
	MaxResults          *int64  `json:"MaxResults"`
	NextToken           *string `json:"NextToken"`
	QualificationTypeID *string `json:"QualificationTypeId"`
}

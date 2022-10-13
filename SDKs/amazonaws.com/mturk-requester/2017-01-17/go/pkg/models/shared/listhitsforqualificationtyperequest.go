package shared

type ListHiTsForQualificationTypeRequest struct {
	MaxResults          *int64  `json:"MaxResults"`
	NextToken           *string `json:"NextToken"`
	QualificationTypeID string  `json:"QualificationTypeId"`
}

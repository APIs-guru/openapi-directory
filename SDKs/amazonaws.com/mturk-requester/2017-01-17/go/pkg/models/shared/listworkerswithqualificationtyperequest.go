package shared

type ListWorkersWithQualificationTypeRequest struct {
	MaxResults          *int64                   `json:"MaxResults"`
	NextToken           *string                  `json:"NextToken"`
	QualificationTypeID string                   `json:"QualificationTypeId"`
	Status              *QualificationStatusEnum `json:"Status"`
}

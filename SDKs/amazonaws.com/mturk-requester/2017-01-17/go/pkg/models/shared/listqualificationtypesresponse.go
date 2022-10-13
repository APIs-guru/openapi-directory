package shared

type ListQualificationTypesResponse struct {
	NextToken          *string             `json:"NextToken"`
	NumResults         *int64              `json:"NumResults"`
	QualificationTypes []QualificationType `json:"QualificationTypes"`
}

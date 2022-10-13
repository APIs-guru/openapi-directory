package shared

type ListWorkersWithQualificationTypeResponse struct {
	NextToken      *string         `json:"NextToken"`
	NumResults     *int64          `json:"NumResults"`
	Qualifications []Qualification `json:"Qualifications"`
}

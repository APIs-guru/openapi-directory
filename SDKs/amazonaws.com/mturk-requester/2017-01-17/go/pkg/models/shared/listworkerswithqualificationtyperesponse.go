package shared

type ListWorkersWithQualificationTypeResponse struct {
	NextToken      *string         `json:"NextToken,omitempty"`
	NumResults     *int64          `json:"NumResults,omitempty"`
	Qualifications []Qualification `json:"Qualifications,omitempty"`
}

package shared

type ReviewDetails struct {
	CaseID *string           `json:"CaseId"`
	Status *ReviewStatusEnum `json:"Status"`
}

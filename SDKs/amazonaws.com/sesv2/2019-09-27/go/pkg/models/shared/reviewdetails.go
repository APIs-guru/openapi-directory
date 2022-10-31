package shared

type ReviewDetails struct {
	CaseID *string           `json:"CaseId,omitempty"`
	Status *ReviewStatusEnum `json:"Status,omitempty"`
}

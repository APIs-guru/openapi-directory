package shared

// ReviewDetails
// An object that contains information about your account details review.
type ReviewDetails struct {
	CaseID *string           `json:"CaseId,omitempty"`
	Status *ReviewStatusEnum `json:"Status,omitempty"`
}

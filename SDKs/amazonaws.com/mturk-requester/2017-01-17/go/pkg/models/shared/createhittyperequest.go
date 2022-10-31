package shared

type CreateHitTypeRequest struct {
	AssignmentDurationInSeconds int64                      `json:"AssignmentDurationInSeconds"`
	AutoApprovalDelayInSeconds  *int64                     `json:"AutoApprovalDelayInSeconds,omitempty"`
	Description                 string                     `json:"Description"`
	Keywords                    *string                    `json:"Keywords,omitempty"`
	QualificationRequirements   []QualificationRequirement `json:"QualificationRequirements,omitempty"`
	Reward                      string                     `json:"Reward"`
	Title                       string                     `json:"Title"`
}

package shared

type CreateHitTypeRequest struct {
	AssignmentDurationInSeconds int64                      `json:"AssignmentDurationInSeconds"`
	AutoApprovalDelayInSeconds  *int64                     `json:"AutoApprovalDelayInSeconds"`
	Description                 string                     `json:"Description"`
	Keywords                    *string                    `json:"Keywords"`
	QualificationRequirements   []QualificationRequirement `json:"QualificationRequirements"`
	Reward                      string                     `json:"Reward"`
	Title                       string                     `json:"Title"`
}

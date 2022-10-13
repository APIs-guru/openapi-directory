package shared

type CreateHitRequest struct {
	AssignmentDurationInSeconds int64                      `json:"AssignmentDurationInSeconds"`
	AssignmentReviewPolicy      *ReviewPolicy              `json:"AssignmentReviewPolicy"`
	AutoApprovalDelayInSeconds  *int64                     `json:"AutoApprovalDelayInSeconds"`
	Description                 string                     `json:"Description"`
	HitLayoutID                 *string                    `json:"HITLayoutId"`
	HitLayoutParameters         []HitLayoutParameter       `json:"HITLayoutParameters"`
	HitReviewPolicy             *ReviewPolicy              `json:"HITReviewPolicy"`
	Keywords                    *string                    `json:"Keywords"`
	LifetimeInSeconds           int64                      `json:"LifetimeInSeconds"`
	MaxAssignments              *int64                     `json:"MaxAssignments"`
	QualificationRequirements   []QualificationRequirement `json:"QualificationRequirements"`
	Question                    *string                    `json:"Question"`
	RequesterAnnotation         *string                    `json:"RequesterAnnotation"`
	Reward                      string                     `json:"Reward"`
	Title                       string                     `json:"Title"`
	UniqueRequestToken          *string                    `json:"UniqueRequestToken"`
}

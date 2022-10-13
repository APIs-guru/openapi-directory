package shared

import (
	"time"
)

type Hit struct {
	AssignmentDurationInSeconds  *int64                     `json:"AssignmentDurationInSeconds"`
	AutoApprovalDelayInSeconds   *int64                     `json:"AutoApprovalDelayInSeconds"`
	CreationTime                 *time.Time                 `json:"CreationTime"`
	Description                  *string                    `json:"Description"`
	Expiration                   *time.Time                 `json:"Expiration"`
	HitGroupID                   *string                    `json:"HITGroupId"`
	HitID                        *string                    `json:"HITId"`
	HitLayoutID                  *string                    `json:"HITLayoutId"`
	HitReviewStatus              *HitReviewStatusEnum       `json:"HITReviewStatus"`
	HitStatus                    *HitStatusEnum             `json:"HITStatus"`
	HitTypeID                    *string                    `json:"HITTypeId"`
	Keywords                     *string                    `json:"Keywords"`
	MaxAssignments               *int64                     `json:"MaxAssignments"`
	NumberOfAssignmentsAvailable *int64                     `json:"NumberOfAssignmentsAvailable"`
	NumberOfAssignmentsCompleted *int64                     `json:"NumberOfAssignmentsCompleted"`
	NumberOfAssignmentsPending   *int64                     `json:"NumberOfAssignmentsPending"`
	QualificationRequirements    []QualificationRequirement `json:"QualificationRequirements"`
	Question                     *string                    `json:"Question"`
	RequesterAnnotation          *string                    `json:"RequesterAnnotation"`
	Reward                       *string                    `json:"Reward"`
	Title                        *string                    `json:"Title"`
}

package shared

import (
"time")

type Hit struct {
    AssignmentDurationInSeconds *int64 `json:"AssignmentDurationInSeconds,omitempty"`
    AutoApprovalDelayInSeconds *int64 `json:"AutoApprovalDelayInSeconds,omitempty"`
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    Description *string `json:"Description,omitempty"`
    Expiration *time.Time `json:"Expiration,omitempty"`
    HitGroupID *string `json:"HITGroupId,omitempty"`
    HitID *string `json:"HITId,omitempty"`
    HitLayoutID *string `json:"HITLayoutId,omitempty"`
    HitReviewStatus *HitReviewStatusEnum `json:"HITReviewStatus,omitempty"`
    HitStatus *HitStatusEnum `json:"HITStatus,omitempty"`
    HitTypeID *string `json:"HITTypeId,omitempty"`
    Keywords *string `json:"Keywords,omitempty"`
    MaxAssignments *int64 `json:"MaxAssignments,omitempty"`
    NumberOfAssignmentsAvailable *int64 `json:"NumberOfAssignmentsAvailable,omitempty"`
    NumberOfAssignmentsCompleted *int64 `json:"NumberOfAssignmentsCompleted,omitempty"`
    NumberOfAssignmentsPending *int64 `json:"NumberOfAssignmentsPending,omitempty"`
    QualificationRequirements []QualificationRequirement `json:"QualificationRequirements,omitempty"`
    Question *string `json:"Question,omitempty"`
    RequesterAnnotation *string `json:"RequesterAnnotation,omitempty"`
    Reward *string `json:"Reward,omitempty"`
    Title *string `json:"Title,omitempty"`
    
}


package shared

import (
	"time"
)

type Assignment struct {
	AcceptTime        *time.Time            `json:"AcceptTime"`
	Answer            *string               `json:"Answer"`
	ApprovalTime      *time.Time            `json:"ApprovalTime"`
	AssignmentID      *string               `json:"AssignmentId"`
	AssignmentStatus  *AssignmentStatusEnum `json:"AssignmentStatus"`
	AutoApprovalTime  *time.Time            `json:"AutoApprovalTime"`
	Deadline          *time.Time            `json:"Deadline"`
	HitID             *string               `json:"HITId"`
	RejectionTime     *time.Time            `json:"RejectionTime"`
	RequesterFeedback *string               `json:"RequesterFeedback"`
	SubmitTime        *time.Time            `json:"SubmitTime"`
	WorkerID          *string               `json:"WorkerId"`
}

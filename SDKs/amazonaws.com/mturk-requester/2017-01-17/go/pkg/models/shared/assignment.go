package shared

import (
	"time"
)

// Assignment
//
//	The Assignment data structure represents a single assignment of a HIT to a Worker. The assignment tracks the Worker's efforts to complete the HIT, and contains the results for later retrieval.
type Assignment struct {
	AcceptTime        *time.Time            `json:"AcceptTime,omitempty"`
	Answer            *string               `json:"Answer,omitempty"`
	ApprovalTime      *time.Time            `json:"ApprovalTime,omitempty"`
	AssignmentID      *string               `json:"AssignmentId,omitempty"`
	AssignmentStatus  *AssignmentStatusEnum `json:"AssignmentStatus,omitempty"`
	AutoApprovalTime  *time.Time            `json:"AutoApprovalTime,omitempty"`
	Deadline          *time.Time            `json:"Deadline,omitempty"`
	HitID             *string               `json:"HITId,omitempty"`
	RejectionTime     *time.Time            `json:"RejectionTime,omitempty"`
	RequesterFeedback *string               `json:"RequesterFeedback,omitempty"`
	SubmitTime        *time.Time            `json:"SubmitTime,omitempty"`
	WorkerID          *string               `json:"WorkerId,omitempty"`
}

package shared

import (
	"time"
)

// QualificationRequest
//
//	The QualificationRequest data structure represents a request a Worker has made for a Qualification.
type QualificationRequest struct {
	Answer                 *string    `json:"Answer,omitempty"`
	QualificationRequestID *string    `json:"QualificationRequestId,omitempty"`
	QualificationTypeID    *string    `json:"QualificationTypeId,omitempty"`
	SubmitTime             *time.Time `json:"SubmitTime,omitempty"`
	Test                   *string    `json:"Test,omitempty"`
	WorkerID               *string    `json:"WorkerId,omitempty"`
}

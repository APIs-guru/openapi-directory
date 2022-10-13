package shared

import (
	"time"
)

type QualificationRequest struct {
	Answer                 *string    `json:"Answer"`
	QualificationRequestID *string    `json:"QualificationRequestId"`
	QualificationTypeID    *string    `json:"QualificationTypeId"`
	SubmitTime             *time.Time `json:"SubmitTime"`
	Test                   *string    `json:"Test"`
	WorkerID               *string    `json:"WorkerId"`
}

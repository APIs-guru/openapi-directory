package shared

import (
	"time"
)

// ReviewInformation
// Information about the result of a document review request.
type ReviewInformation struct {
	ReviewedTime *time.Time        `json:"ReviewedTime,omitempty"`
	Reviewer     *string           `json:"Reviewer,omitempty"`
	Status       *ReviewStatusEnum `json:"Status,omitempty"`
}

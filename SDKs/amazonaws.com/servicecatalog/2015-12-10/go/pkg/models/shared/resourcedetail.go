package shared

import (
	"time"
)

// ResourceDetail
// Information about a resource.
type ResourceDetail struct {
	Arn         *string    `json:"ARN,omitempty"`
	CreatedTime *time.Time `json:"CreatedTime,omitempty"`
	Description *string    `json:"Description,omitempty"`
	ID          *string    `json:"Id,omitempty"`
	Name        *string    `json:"Name,omitempty"`
}

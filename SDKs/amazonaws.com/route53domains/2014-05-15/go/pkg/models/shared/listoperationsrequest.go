package shared

import (
	"time"
)

// ListOperationsRequest
// The ListOperations request includes the following elements.
type ListOperationsRequest struct {
	Marker         *string    `json:"Marker,omitempty"`
	MaxItems       *int64     `json:"MaxItems,omitempty"`
	SubmittedSince *time.Time `json:"SubmittedSince,omitempty"`
}

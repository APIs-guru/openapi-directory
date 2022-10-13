package shared

import (
	"time"
)

type ListOperationsRequest struct {
	Marker         *string    `json:"Marker"`
	MaxItems       *int64     `json:"MaxItems"`
	SubmittedSince *time.Time `json:"SubmittedSince"`
}

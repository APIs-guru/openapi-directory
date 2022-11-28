package shared

import (
	"time"
)

// ViewBillingRequest
// The ViewBilling request includes the following elements.
type ViewBillingRequest struct {
	End      *time.Time `json:"End,omitempty"`
	Marker   *string    `json:"Marker,omitempty"`
	MaxItems *int64     `json:"MaxItems,omitempty"`
	Start    *time.Time `json:"Start,omitempty"`
}

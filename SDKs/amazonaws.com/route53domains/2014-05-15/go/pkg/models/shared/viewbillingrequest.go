package shared

import (
	"time"
)

type ViewBillingRequest struct {
	End      *time.Time `json:"End"`
	Marker   *string    `json:"Marker"`
	MaxItems *int64     `json:"MaxItems"`
	Start    *time.Time `json:"Start"`
}

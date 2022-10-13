package shared

import (
	"time"
)

type UpdateTrackerResponse struct {
	TrackerArn  string    `json:"TrackerArn"`
	TrackerName string    `json:"TrackerName"`
	UpdateTime  time.Time `json:"UpdateTime"`
}

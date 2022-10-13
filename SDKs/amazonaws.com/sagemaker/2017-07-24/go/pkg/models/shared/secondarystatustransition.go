package shared

import (
	"time"
)

type SecondaryStatusTransition struct {
	EndTime       *time.Time          `json:"EndTime"`
	StartTime     time.Time           `json:"StartTime"`
	Status        SecondaryStatusEnum `json:"Status"`
	StatusMessage *string             `json:"StatusMessage"`
}

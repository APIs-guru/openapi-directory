package shared

import (
	"time"
)

type Fragment struct {
	FragmentLengthInMilliseconds *int64     `json:"FragmentLengthInMilliseconds,omitempty"`
	FragmentNumber               *string    `json:"FragmentNumber,omitempty"`
	FragmentSizeInBytes          *int64     `json:"FragmentSizeInBytes,omitempty"`
	ProducerTimestamp            *time.Time `json:"ProducerTimestamp,omitempty"`
	ServerTimestamp              *time.Time `json:"ServerTimestamp,omitempty"`
}

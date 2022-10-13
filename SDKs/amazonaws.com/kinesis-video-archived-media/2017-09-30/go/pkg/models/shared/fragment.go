package shared

import (
	"time"
)

type Fragment struct {
	FragmentLengthInMilliseconds *int64     `json:"FragmentLengthInMilliseconds"`
	FragmentNumber               *string    `json:"FragmentNumber"`
	FragmentSizeInBytes          *int64     `json:"FragmentSizeInBytes"`
	ProducerTimestamp            *time.Time `json:"ProducerTimestamp"`
	ServerTimestamp              *time.Time `json:"ServerTimestamp"`
}

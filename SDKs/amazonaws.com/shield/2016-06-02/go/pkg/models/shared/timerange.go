package shared

import (
	"time"
)

type TimeRange struct {
	FromInclusive *time.Time `json:"FromInclusive,omitempty"`
	ToExclusive   *time.Time `json:"ToExclusive,omitempty"`
}

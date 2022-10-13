package shared

import (
	"time"
)

type TimeRange struct {
	FromInclusive *time.Time `json:"FromInclusive"`
	ToExclusive   *time.Time `json:"ToExclusive"`
}

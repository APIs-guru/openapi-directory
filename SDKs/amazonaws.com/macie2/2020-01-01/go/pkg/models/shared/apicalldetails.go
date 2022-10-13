package shared

import (
	"time"
)

type APICallDetails struct {
	API            *string    `json:"api"`
	APIServiceName *string    `json:"apiServiceName"`
	FirstSeen      *time.Time `json:"firstSeen"`
	LastSeen       *time.Time `json:"lastSeen"`
}

package shared

import (
	"time"
)

type StateModelGet struct {
	By    *string    `json:"by"`
	Since *time.Time `json:"since"`
	Value *bool      `json:"value"`
}

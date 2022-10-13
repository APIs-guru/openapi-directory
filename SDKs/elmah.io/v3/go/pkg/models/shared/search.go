package shared

import (
	"time"
)

type Search struct {
	From  *time.Time `json:"from"`
	Query *string    `json:"query"`
	To    *time.Time `json:"to"`
}

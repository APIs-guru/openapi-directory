package shared

import (
	"time"
)

type FacetEvent struct {
	Date *time.Time `json:"date"`
	ID   *int32     `json:"id"`
	Name *string    `json:"name"`
}

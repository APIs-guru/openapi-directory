package shared

import (
	"time"
)

type SlotTypeMetadata struct {
	CreatedDate     *time.Time `json:"createdDate"`
	Description     *string    `json:"description"`
	LastUpdatedDate *time.Time `json:"lastUpdatedDate"`
	Name            *string    `json:"name"`
	Version         *string    `json:"version"`
}

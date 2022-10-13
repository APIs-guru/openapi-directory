package shared

import (
	"time"
)

type TemplateSummary struct {
	Arn           *string    `json:"arn"`
	CreatedAt     *time.Time `json:"createdAt"`
	LastUpdatedAt *time.Time `json:"lastUpdatedAt"`
	Name          *string    `json:"name"`
	Version       *string    `json:"version"`
}

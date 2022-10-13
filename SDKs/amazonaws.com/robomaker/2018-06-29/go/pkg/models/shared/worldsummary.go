package shared

import (
	"time"
)

type WorldSummary struct {
	Arn           *string    `json:"arn"`
	CreatedAt     *time.Time `json:"createdAt"`
	GenerationJob *string    `json:"generationJob"`
	Template      *string    `json:"template"`
}

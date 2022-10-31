package shared

import (
	"time"
)

type WorldSummary struct {
	Arn           *string    `json:"arn,omitempty"`
	CreatedAt     *time.Time `json:"createdAt,omitempty"`
	GenerationJob *string    `json:"generationJob,omitempty"`
	Template      *string    `json:"template,omitempty"`
}

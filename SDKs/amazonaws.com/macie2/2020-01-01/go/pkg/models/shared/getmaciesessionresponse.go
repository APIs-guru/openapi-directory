package shared

import (
	"time"
)

type GetMacieSessionResponse struct {
	CreatedAt                  *time.Time                      `json:"createdAt,omitempty"`
	FindingPublishingFrequency *FindingPublishingFrequencyEnum `json:"findingPublishingFrequency,omitempty"`
	ServiceRole                *string                         `json:"serviceRole,omitempty"`
	Status                     *MacieStatusEnum                `json:"status,omitempty"`
	UpdatedAt                  *time.Time                      `json:"updatedAt,omitempty"`
}

package shared

import (
	"time"
)

type GetMacieSessionResponse struct {
	CreatedAt                  *time.Time                      `json:"createdAt"`
	FindingPublishingFrequency *FindingPublishingFrequencyEnum `json:"findingPublishingFrequency"`
	ServiceRole                *string                         `json:"serviceRole"`
	Status                     *MacieStatusEnum                `json:"status"`
	UpdatedAt                  *time.Time                      `json:"updatedAt"`
}

package shared

import (
	"time"
)

// PartnerIntegrationInfo
// Describes a partner integration.
type PartnerIntegrationInfo struct {
	CreatedAt     *time.Time
	DatabaseName  *string
	PartnerName   *string
	Status        *PartnerIntegrationStatusEnum
	StatusMessage *string
	UpdatedAt     *time.Time
}

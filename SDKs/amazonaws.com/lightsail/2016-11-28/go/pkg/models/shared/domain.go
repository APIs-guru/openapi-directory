package shared

import (
	"time"
)

// Domain
// Describes a domain where you are storing recordsets.
type Domain struct {
	Arn           *string           `json:"arn,omitempty"`
	CreatedAt     *time.Time        `json:"createdAt,omitempty"`
	DomainEntries []DomainEntry     `json:"domainEntries,omitempty"`
	Location      *ResourceLocation `json:"location,omitempty"`
	Name          *string           `json:"name,omitempty"`
	ResourceType  *ResourceTypeEnum `json:"resourceType,omitempty"`
	SupportCode   *string           `json:"supportCode,omitempty"`
	Tags          []Tag             `json:"tags,omitempty"`
}

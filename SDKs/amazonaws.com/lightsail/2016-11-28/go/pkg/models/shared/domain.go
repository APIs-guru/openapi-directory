package shared

import (
	"time"
)

type Domain struct {
	Arn           *string           `json:"arn"`
	CreatedAt     *time.Time        `json:"createdAt"`
	DomainEntries []DomainEntry     `json:"domainEntries"`
	Location      *ResourceLocation `json:"location"`
	Name          *string           `json:"name"`
	ResourceType  *ResourceTypeEnum `json:"resourceType"`
	SupportCode   *string           `json:"supportCode"`
	Tags          []Tag             `json:"tags"`
}

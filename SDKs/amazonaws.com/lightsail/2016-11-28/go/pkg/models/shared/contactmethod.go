package shared

import (
	"time"
)

type ContactMethod struct {
	Arn             *string                  `json:"arn,omitempty"`
	ContactEndpoint *string                  `json:"contactEndpoint,omitempty"`
	CreatedAt       *time.Time               `json:"createdAt,omitempty"`
	Location        *ResourceLocation        `json:"location,omitempty"`
	Name            *string                  `json:"name,omitempty"`
	Protocol        *ContactProtocolEnum     `json:"protocol,omitempty"`
	ResourceType    *ResourceTypeEnum        `json:"resourceType,omitempty"`
	Status          *ContactMethodStatusEnum `json:"status,omitempty"`
	SupportCode     *string                  `json:"supportCode,omitempty"`
}

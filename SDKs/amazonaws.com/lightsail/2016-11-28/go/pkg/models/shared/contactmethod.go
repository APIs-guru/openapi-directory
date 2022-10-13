package shared

import (
	"time"
)

type ContactMethod struct {
	Arn             *string                  `json:"arn"`
	ContactEndpoint *string                  `json:"contactEndpoint"`
	CreatedAt       *time.Time               `json:"createdAt"`
	Location        *ResourceLocation        `json:"location"`
	Name            *string                  `json:"name"`
	Protocol        *ContactProtocolEnum     `json:"protocol"`
	ResourceType    *ResourceTypeEnum        `json:"resourceType"`
	Status          *ContactMethodStatusEnum `json:"status"`
	SupportCode     *string                  `json:"supportCode"`
}

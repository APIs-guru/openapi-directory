package shared

import (
	"time"
)

type StaticIP struct {
	Arn          *string           `json:"arn,omitempty"`
	AttachedTo   *string           `json:"attachedTo,omitempty"`
	CreatedAt    *time.Time        `json:"createdAt,omitempty"`
	IPAddress    *string           `json:"ipAddress,omitempty"`
	IsAttached   *bool             `json:"isAttached,omitempty"`
	Location     *ResourceLocation `json:"location,omitempty"`
	Name         *string           `json:"name,omitempty"`
	ResourceType *ResourceTypeEnum `json:"resourceType,omitempty"`
	SupportCode  *string           `json:"supportCode,omitempty"`
}

package shared

import (
	"time"
)

type StaticIP struct {
	Arn          *string           `json:"arn"`
	AttachedTo   *string           `json:"attachedTo"`
	CreatedAt    *time.Time        `json:"createdAt"`
	IPAddress    *string           `json:"ipAddress"`
	IsAttached   *bool             `json:"isAttached"`
	Location     *ResourceLocation `json:"location"`
	Name         *string           `json:"name"`
	ResourceType *ResourceTypeEnum `json:"resourceType"`
	SupportCode  *string           `json:"supportCode"`
}

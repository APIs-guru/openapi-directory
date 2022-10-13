package shared

import (
	"time"
)

type KeyPair struct {
	Arn          *string           `json:"arn"`
	CreatedAt    *time.Time        `json:"createdAt"`
	Fingerprint  *string           `json:"fingerprint"`
	Location     *ResourceLocation `json:"location"`
	Name         *string           `json:"name"`
	ResourceType *ResourceTypeEnum `json:"resourceType"`
	SupportCode  *string           `json:"supportCode"`
	Tags         []Tag             `json:"tags"`
}

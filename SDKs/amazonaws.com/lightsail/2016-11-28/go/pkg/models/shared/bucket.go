package shared

import (
	"time"
)

type Bucket struct {
	AbleToUpdateBundle       *bool                     `json:"ableToUpdateBundle"`
	AccessRules              *AccessRules              `json:"accessRules"`
	Arn                      *string                   `json:"arn"`
	BundleID                 *string                   `json:"bundleId"`
	CreatedAt                *time.Time                `json:"createdAt"`
	Location                 *ResourceLocation         `json:"location"`
	Name                     *string                   `json:"name"`
	ObjectVersioning         *string                   `json:"objectVersioning"`
	ReadonlyAccessAccounts   []string                  `json:"readonlyAccessAccounts"`
	ResourceType             *string                   `json:"resourceType"`
	ResourcesReceivingAccess []ResourceReceivingAccess `json:"resourcesReceivingAccess"`
	State                    *BucketState              `json:"state"`
	SupportCode              *string                   `json:"supportCode"`
	Tags                     []Tag                     `json:"tags"`
	URL                      *string                   `json:"url"`
}

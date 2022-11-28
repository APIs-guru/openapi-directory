package shared

import (
	"time"
)

// Bucket
// Describes an Amazon Lightsail bucket.
type Bucket struct {
	AbleToUpdateBundle       *bool                     `json:"ableToUpdateBundle,omitempty"`
	AccessRules              *AccessRules              `json:"accessRules,omitempty"`
	Arn                      *string                   `json:"arn,omitempty"`
	BundleID                 *string                   `json:"bundleId,omitempty"`
	CreatedAt                *time.Time                `json:"createdAt,omitempty"`
	Location                 *ResourceLocation         `json:"location,omitempty"`
	Name                     *string                   `json:"name,omitempty"`
	ObjectVersioning         *string                   `json:"objectVersioning,omitempty"`
	ReadonlyAccessAccounts   []string                  `json:"readonlyAccessAccounts,omitempty"`
	ResourceType             *string                   `json:"resourceType,omitempty"`
	ResourcesReceivingAccess []ResourceReceivingAccess `json:"resourcesReceivingAccess,omitempty"`
	State                    *BucketState              `json:"state,omitempty"`
	SupportCode              *string                   `json:"supportCode,omitempty"`
	Tags                     []Tag                     `json:"tags,omitempty"`
	URL                      *string                   `json:"url,omitempty"`
}

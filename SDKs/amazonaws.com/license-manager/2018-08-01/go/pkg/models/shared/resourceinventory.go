package shared

// ResourceInventory
// Details about a resource.
type ResourceInventory struct {
	Platform                *string           `json:"Platform,omitempty"`
	PlatformVersion         *string           `json:"PlatformVersion,omitempty"`
	ResourceArn             *string           `json:"ResourceArn,omitempty"`
	ResourceID              *string           `json:"ResourceId,omitempty"`
	ResourceOwningAccountID *string           `json:"ResourceOwningAccountId,omitempty"`
	ResourceType            *ResourceTypeEnum `json:"ResourceType,omitempty"`
}

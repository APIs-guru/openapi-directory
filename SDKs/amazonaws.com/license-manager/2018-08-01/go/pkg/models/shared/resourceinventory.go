package shared

type ResourceInventory struct {
	Platform                *string           `json:"Platform"`
	PlatformVersion         *string           `json:"PlatformVersion"`
	ResourceArn             *string           `json:"ResourceArn"`
	ResourceID              *string           `json:"ResourceId"`
	ResourceOwningAccountID *string           `json:"ResourceOwningAccountId"`
	ResourceType            *ResourceTypeEnum `json:"ResourceType"`
}

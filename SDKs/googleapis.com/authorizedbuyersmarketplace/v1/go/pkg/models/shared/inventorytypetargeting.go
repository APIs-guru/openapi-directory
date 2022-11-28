package shared

type InventoryTypeTargetingInventoryTypesEnum string

const (
	InventoryTypeTargetingInventoryTypesEnumInventoryTypeUnspecified InventoryTypeTargetingInventoryTypesEnum = "INVENTORY_TYPE_UNSPECIFIED"
	InventoryTypeTargetingInventoryTypesEnumBrowser                  InventoryTypeTargetingInventoryTypesEnum = "BROWSER"
	InventoryTypeTargetingInventoryTypesEnumMobileApp                InventoryTypeTargetingInventoryTypesEnum = "MOBILE_APP"
	InventoryTypeTargetingInventoryTypesEnumVideoPlayer              InventoryTypeTargetingInventoryTypesEnum = "VIDEO_PLAYER"
)

// InventoryTypeTargeting
// Targeting of the inventory types a bid request can originate from.
type InventoryTypeTargeting struct {
	InventoryTypes []InventoryTypeTargetingInventoryTypesEnum `json:"inventoryTypes,omitempty"`
}

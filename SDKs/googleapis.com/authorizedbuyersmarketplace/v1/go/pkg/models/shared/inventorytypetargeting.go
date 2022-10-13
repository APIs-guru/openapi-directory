package shared

type InventoryTypeTargetingInventoryTypesEnum string

const (
	InventoryTypeTargetingInventoryTypesEnumInventoryTypeUnspecified InventoryTypeTargetingInventoryTypesEnum = "INVENTORY_TYPE_UNSPECIFIED"
	InventoryTypeTargetingInventoryTypesEnumBrowser                  InventoryTypeTargetingInventoryTypesEnum = "BROWSER"
	InventoryTypeTargetingInventoryTypesEnumMobileApp                InventoryTypeTargetingInventoryTypesEnum = "MOBILE_APP"
	InventoryTypeTargetingInventoryTypesEnumVideoPlayer              InventoryTypeTargetingInventoryTypesEnum = "VIDEO_PLAYER"
)

type InventoryTypeTargeting struct {
	InventoryTypes []InventoryTypeTargetingInventoryTypesEnum `json:"inventoryTypes"`
}

package shared

import (
	"time"
)

// DestinyComponentsVendorsDestinyPublicVendorSaleItemComponent
// Has character-agnostic information about an item being sold by a vendor.
// Note that if you want instance, stats, etc... data for the item, you'll have to request additional components such as ItemInstances, ItemPerks etc... and acquire them from the DestinyVendorResponse's "items" property. For most of these, however, you'll have to ask for it in context of a specific character.
type DestinyComponentsVendorsDestinyPublicVendorSaleItemComponent struct {
	APIPurchasable          *bool
	Costs                   []DestinyDestinyItemQuantity
	ItemHash                *int64
	OverrideNextRefreshDate *time.Time
	OverrideStyleItemHash   *int64
	Quantity                *int32
	VendorItemIndex         *int32
}

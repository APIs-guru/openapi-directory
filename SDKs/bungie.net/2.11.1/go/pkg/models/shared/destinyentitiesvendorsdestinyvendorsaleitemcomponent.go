package shared

import (
	"time"
)

// DestinyEntitiesVendorsDestinyVendorSaleItemComponent
// Request this component if you want the details about an item being sold in relation to the character making the request: whether the character can buy it, whether they can afford it, and other data related to purchasing the item.
// Note that if you want instance, stats, etc... data for the item, you'll have to request additional components such as ItemInstances, ItemPerks etc... and acquire them from the DestinyVendorResponse's "items" property.
type DestinyEntitiesVendorsDestinyVendorSaleItemComponent struct {
	APIPurchasable          *bool
	Augments                *int32
	Costs                   []DestinyDestinyItemQuantity
	FailureIndexes          []int32
	ItemHash                *int64
	ItemValueVisibility     []bool
	OverrideNextRefreshDate *time.Time
	OverrideStyleItemHash   *int64
	Quantity                *int32
	RequiredUnlocks         []int64
	SaleStatus              *int32
	UnlockStatuses          []DestinyDestinyUnlockStatus
	VendorItemIndex         *int32
}

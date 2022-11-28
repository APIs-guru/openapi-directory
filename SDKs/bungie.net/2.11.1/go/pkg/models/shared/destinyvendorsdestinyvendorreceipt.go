package shared

import (
	"time"
)

// DestinyVendorsDestinyVendorReceiptItemReceived
// The item that was received, and its quantity.
type DestinyVendorsDestinyVendorReceiptItemReceived struct {
	HasConditionalVisibility *bool
	ItemHash                 *int64
	ItemInstanceID           *int64
	Quantity                 *int32
}

// DestinyVendorsDestinyVendorReceipt
// If a character purchased an item that is refundable, a Vendor Receipt will be created on the user's Destiny Profile. These expire after a configurable period of time, but until then can be used to get refunds on items. BNet does not provide the ability to refund a purchase *yet*, but you know.
type DestinyVendorsDestinyVendorReceipt struct {
	CurrencyPaid           []DestinyDestinyItemQuantity
	ExpiresOn              *time.Time
	ItemReceived           *DestinyVendorsDestinyVendorReceiptItemReceived
	LicenseUnlockHash      *int64
	PurchasedByCharacterID *int64
	RefundPolicy           *int32
	SequenceNumber         *int32
	TimeToExpiration       *int64
}

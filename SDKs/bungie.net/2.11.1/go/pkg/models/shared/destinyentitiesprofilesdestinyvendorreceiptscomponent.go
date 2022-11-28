package shared

// DestinyEntitiesProfilesDestinyVendorReceiptsComponent
// For now, this isn't used for much: it's a record of the recent refundable purchases that the user has made. In the future, it could be used for providing refunds/buyback via the API. Wouldn't that be fun?
type DestinyEntitiesProfilesDestinyVendorReceiptsComponent struct {
	Receipts []DestinyVendorsDestinyVendorReceipt
}

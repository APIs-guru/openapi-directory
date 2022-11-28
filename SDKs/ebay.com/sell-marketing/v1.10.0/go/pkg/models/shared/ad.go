package shared

// Ad
// This type defines the fields for an ad.
type Ad struct {
	AdID                   *string `json:"adId,omitempty"`
	BidPercentage          *string `json:"bidPercentage,omitempty"`
	InventoryReferenceID   *string `json:"inventoryReferenceId,omitempty"`
	InventoryReferenceType *string `json:"inventoryReferenceType,omitempty"`
	ListingID              *string `json:"listingId,omitempty"`
}

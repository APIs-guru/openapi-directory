package shared

type Ad struct {
	AdID                   *string `json:"adId"`
	BidPercentage          *string `json:"bidPercentage"`
	InventoryReferenceID   *string `json:"inventoryReferenceId"`
	InventoryReferenceType *string `json:"inventoryReferenceType"`
	ListingID              *string `json:"listingId"`
}

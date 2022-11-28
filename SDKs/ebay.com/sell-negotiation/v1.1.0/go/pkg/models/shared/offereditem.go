package shared

// OfferedItem
// A complex type that defines the offer being made to an &quot;interested&quot; buyer.
type OfferedItem struct {
	DiscountPercentage *string `json:"discountPercentage,omitempty"`
	ListingID          *string `json:"listingId,omitempty"`
	Price              *Amount `json:"price,omitempty"`
	Quantity           *int32  `json:"quantity,omitempty"`
}

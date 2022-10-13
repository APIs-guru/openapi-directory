package shared

type OfferedItem struct {
	DiscountPercentage *string `json:"discountPercentage"`
	ListingID          *string `json:"listingId"`
	Price              *Amount `json:"price"`
	Quantity           *int32  `json:"quantity"`
}

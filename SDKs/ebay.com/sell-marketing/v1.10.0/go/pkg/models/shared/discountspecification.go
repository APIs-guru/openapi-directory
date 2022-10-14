package shared

type DiscountSpecification struct {
	ForEachAmount           *Amount `json:"forEachAmount,omitempty"`
	ForEachQuantity         *int32  `json:"forEachQuantity,omitempty"`
	MinAmount               *Amount `json:"minAmount,omitempty"`
	MinQuantity             *int32  `json:"minQuantity,omitempty"`
	NumberOfDiscountedItems *int32  `json:"numberOfDiscountedItems,omitempty"`
}

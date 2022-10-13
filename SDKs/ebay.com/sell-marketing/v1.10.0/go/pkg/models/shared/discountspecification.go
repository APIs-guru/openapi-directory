package shared

type DiscountSpecification struct {
	ForEachAmount           *Amount `json:"forEachAmount"`
	ForEachQuantity         *int32  `json:"forEachQuantity"`
	MinAmount               *Amount `json:"minAmount"`
	MinQuantity             *int32  `json:"minQuantity"`
	NumberOfDiscountedItems *int32  `json:"numberOfDiscountedItems"`
}

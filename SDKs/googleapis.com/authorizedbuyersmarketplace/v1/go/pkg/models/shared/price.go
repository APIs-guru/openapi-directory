package shared

type PriceTypeEnum string

const (
	PriceTypeEnumTypeUnspecified PriceTypeEnum = "TYPE_UNSPECIFIED"
	PriceTypeEnumCpm             PriceTypeEnum = "CPM"
	PriceTypeEnumCpd             PriceTypeEnum = "CPD"
)

// Price
// Represents a price and a pricing type for a deal.
type Price struct {
	Amount *Money         `json:"amount,omitempty"`
	Type   *PriceTypeEnum `json:"type,omitempty"`
}

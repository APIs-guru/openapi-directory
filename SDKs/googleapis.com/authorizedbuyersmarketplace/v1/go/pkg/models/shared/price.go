package shared

type PriceTypeEnum string

const (
	PriceTypeEnumTypeUnspecified PriceTypeEnum = "TYPE_UNSPECIFIED"
	PriceTypeEnumCpm             PriceTypeEnum = "CPM"
	PriceTypeEnumCpd             PriceTypeEnum = "CPD"
)

type Price struct {
	Amount *Money         `json:"amount,omitempty"`
	Type   *PriceTypeEnum `json:"type,omitempty"`
}

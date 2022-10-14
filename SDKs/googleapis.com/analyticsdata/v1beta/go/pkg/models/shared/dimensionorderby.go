package shared

type DimensionOrderByOrderTypeEnum string

const (
	DimensionOrderByOrderTypeEnumOrderTypeUnspecified        DimensionOrderByOrderTypeEnum = "ORDER_TYPE_UNSPECIFIED"
	DimensionOrderByOrderTypeEnumAlphanumeric                DimensionOrderByOrderTypeEnum = "ALPHANUMERIC"
	DimensionOrderByOrderTypeEnumCaseInsensitiveAlphanumeric DimensionOrderByOrderTypeEnum = "CASE_INSENSITIVE_ALPHANUMERIC"
	DimensionOrderByOrderTypeEnumNumeric                     DimensionOrderByOrderTypeEnum = "NUMERIC"
)

type DimensionOrderBy struct {
	DimensionName *string                        `json:"dimensionName,omitempty"`
	OrderType     *DimensionOrderByOrderTypeEnum `json:"orderType,omitempty"`
}

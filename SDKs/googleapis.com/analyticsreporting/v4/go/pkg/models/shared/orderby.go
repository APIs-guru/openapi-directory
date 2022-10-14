package shared

type OrderByOrderTypeEnum string

const (
	OrderByOrderTypeEnumOrderTypeUnspecified OrderByOrderTypeEnum = "ORDER_TYPE_UNSPECIFIED"
	OrderByOrderTypeEnumValue                OrderByOrderTypeEnum = "VALUE"
	OrderByOrderTypeEnumDelta                OrderByOrderTypeEnum = "DELTA"
	OrderByOrderTypeEnumSmart                OrderByOrderTypeEnum = "SMART"
	OrderByOrderTypeEnumHistogramBucket      OrderByOrderTypeEnum = "HISTOGRAM_BUCKET"
	OrderByOrderTypeEnumDimensionAsInteger   OrderByOrderTypeEnum = "DIMENSION_AS_INTEGER"
)

type OrderBySortOrderEnum string

const (
	OrderBySortOrderEnumSortOrderUnspecified OrderBySortOrderEnum = "SORT_ORDER_UNSPECIFIED"
	OrderBySortOrderEnumAscending            OrderBySortOrderEnum = "ASCENDING"
	OrderBySortOrderEnumDescending           OrderBySortOrderEnum = "DESCENDING"
)

type OrderBy struct {
	FieldName *string               `json:"fieldName,omitempty"`
	OrderType *OrderByOrderTypeEnum `json:"orderType,omitempty"`
	SortOrder *OrderBySortOrderEnum `json:"sortOrder,omitempty"`
}

package shared

type GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderByOrderTypeEnum string

const (
	GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderByOrderTypeEnumOrderTypeUnspecified        GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderByOrderTypeEnum = "ORDER_TYPE_UNSPECIFIED"
	GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderByOrderTypeEnumAlphanumeric                GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderByOrderTypeEnum = "ALPHANUMERIC"
	GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderByOrderTypeEnumCaseInsensitiveAlphanumeric GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderByOrderTypeEnum = "CASE_INSENSITIVE_ALPHANUMERIC"
	GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderByOrderTypeEnumNumeric                     GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderByOrderTypeEnum = "NUMERIC"
)

// GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderBy
// Sorts by dimension values.
type GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderBy struct {
	DimensionName *string                                                                `json:"dimensionName,omitempty"`
	OrderType     *GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderByOrderTypeEnum `json:"orderType,omitempty"`
}

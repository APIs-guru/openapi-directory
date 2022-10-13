package shared

type GoogleAnalyticsAdminV1alphaAccessNumericFilterOperationEnum string

const (
	GoogleAnalyticsAdminV1alphaAccessNumericFilterOperationEnumOperationUnspecified GoogleAnalyticsAdminV1alphaAccessNumericFilterOperationEnum = "OPERATION_UNSPECIFIED"
	GoogleAnalyticsAdminV1alphaAccessNumericFilterOperationEnumEqual                GoogleAnalyticsAdminV1alphaAccessNumericFilterOperationEnum = "EQUAL"
	GoogleAnalyticsAdminV1alphaAccessNumericFilterOperationEnumLessThan             GoogleAnalyticsAdminV1alphaAccessNumericFilterOperationEnum = "LESS_THAN"
	GoogleAnalyticsAdminV1alphaAccessNumericFilterOperationEnumLessThanOrEqual      GoogleAnalyticsAdminV1alphaAccessNumericFilterOperationEnum = "LESS_THAN_OR_EQUAL"
	GoogleAnalyticsAdminV1alphaAccessNumericFilterOperationEnumGreaterThan          GoogleAnalyticsAdminV1alphaAccessNumericFilterOperationEnum = "GREATER_THAN"
	GoogleAnalyticsAdminV1alphaAccessNumericFilterOperationEnumGreaterThanOrEqual   GoogleAnalyticsAdminV1alphaAccessNumericFilterOperationEnum = "GREATER_THAN_OR_EQUAL"
)

type GoogleAnalyticsAdminV1alphaAccessNumericFilter struct {
	Operation *GoogleAnalyticsAdminV1alphaAccessNumericFilterOperationEnum `json:"operation"`
	Value     *GoogleAnalyticsAdminV1alphaNumericValue                     `json:"value"`
}

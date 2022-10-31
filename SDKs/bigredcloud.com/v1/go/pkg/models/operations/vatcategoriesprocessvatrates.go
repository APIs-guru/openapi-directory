package operations

import (
	"openapi/pkg/models/shared"
)

type VatCategoriesProcessVatRatesRequest struct {
	Request []shared.VatRatesByVatCategoryDto `request:"mediaType=application/json"`
}

type VatCategoriesProcessVatRatesResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	VatCategoriesProcessVatRates200ApplicationJSONObject map[string]interface{}
}

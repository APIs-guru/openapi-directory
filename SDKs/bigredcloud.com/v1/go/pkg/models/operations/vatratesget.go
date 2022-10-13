package operations

import (
	"openapi/pkg/models/shared"
)

type VatRatesGetResponse struct {
	ContentType          string
	PageResultVatRateDto *shared.PageResultVatRateDto
	StatusCode           int64
}

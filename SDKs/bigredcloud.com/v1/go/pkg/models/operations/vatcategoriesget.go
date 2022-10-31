package operations

import (
	"openapi/pkg/models/shared"
)

type VatCategoriesGetResponse struct {
	ContentType              string
	PageResultVatCategoryDto *shared.PageResultVatCategoryDto
	StatusCode               int64
}

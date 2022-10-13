package operations

import (
	"openapi/pkg/models/shared"
)

type ProductsGetResponse struct {
	ContentType          string
	PageResultProductDto *shared.PageResultProductDto
	StatusCode           int64
}

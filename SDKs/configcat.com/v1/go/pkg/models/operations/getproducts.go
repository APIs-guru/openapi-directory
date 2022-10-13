package operations

import (
	"openapi/pkg/models/shared"
)

type GetProductsResponse struct {
	ContentType          string
	ProductModelHaljsons []shared.ProductModelHaljson
	ProductModels        []shared.ProductModel
	StatusCode           int64
}

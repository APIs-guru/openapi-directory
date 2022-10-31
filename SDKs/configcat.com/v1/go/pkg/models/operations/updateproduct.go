package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateProductPathParams struct {
	ProductID string `pathParam:"style=simple,explode=false,name=productId"`
}

type UpdateProductRequests struct {
	UpdateProductRequest  *shared.UpdateProductRequest `request:"mediaType=application/*+json"`
	UpdateProductRequest1 *shared.UpdateProductRequest `request:"mediaType=application/json"`
	UpdateProductRequest2 *shared.UpdateProductRequest `request:"mediaType=text/json"`
}

type UpdateProductRequest struct {
	PathParams UpdateProductPathParams
	Request    UpdateProductRequests
}

type UpdateProductResponse struct {
	ContentType         string
	ProductModel        *shared.ProductModel
	ProductModelHaljson *shared.ProductModelHaljson
	StatusCode          int64
}

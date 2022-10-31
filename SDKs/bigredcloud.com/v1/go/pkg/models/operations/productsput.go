package operations

import (
	"openapi/pkg/models/shared"
)

type ProductsPutPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type ProductsPutRequest struct {
	PathParams ProductsPutPathParams
	Request    shared.ProductDto `request:"mediaType=application/json"`
}

type ProductsPutResponse struct {
	ContentType                         string
	ProductsPut200ApplicationJSONObject map[string]interface{}
	StatusCode                          int64
}

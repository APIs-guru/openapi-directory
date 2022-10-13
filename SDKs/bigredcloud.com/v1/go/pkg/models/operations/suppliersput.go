package operations

import (
	"openapi/pkg/models/shared"
)

type SuppliersPutPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type SuppliersPutRequest struct {
	PathParams SuppliersPutPathParams
	Request    shared.SupplierDto `request:"mediaType=application/json"`
}

type SuppliersPutResponse struct {
	ContentType                          string
	StatusCode                           int64
	SuppliersPut200ApplicationJSONObject map[string]interface{}
}

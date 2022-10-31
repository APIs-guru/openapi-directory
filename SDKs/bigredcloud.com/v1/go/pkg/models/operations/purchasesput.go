package operations

import (
	"openapi/pkg/models/shared"
)

type PurchasesPutPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PurchasesPutRequest struct {
	PathParams PurchasesPutPathParams
	Request    shared.PurchaseDto `request:"mediaType=application/json"`
}

type PurchasesPutResponse struct {
	ContentType                          string
	PurchasesPut200ApplicationJSONObject map[string]interface{}
	StatusCode                           int64
}

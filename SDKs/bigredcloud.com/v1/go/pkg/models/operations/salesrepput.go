package operations

import (
	"openapi/pkg/models/shared"
)

type SalesRepPutPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type SalesRepPutRequest struct {
	PathParams SalesRepPutPathParams
	Request    shared.SaleRepsDto `request:"mediaType=application/json"`
}

type SalesRepPutResponse struct {
	ContentType                         string
	SalesRepPut200ApplicationJSONObject map[string]interface{}
	StatusCode                          int64
}

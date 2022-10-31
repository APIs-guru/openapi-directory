package operations

import (
	"openapi/pkg/models/shared"
)

type CustomersPutPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type CustomersPutRequest struct {
	PathParams CustomersPutPathParams
	Request    shared.CustomerDto `request:"mediaType=application/json"`
}

type CustomersPutResponse struct {
	ContentType                          string
	CustomersPut200ApplicationJSONObject map[string]interface{}
	StatusCode                           int64
}

package operations

import (
	"openapi/pkg/models/shared"
)

type BankAccountsPutPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type BankAccountsPutRequest struct {
	PathParams BankAccountsPutPathParams
	Request    shared.BankAccountDto `request:"mediaType=application/json"`
}

type BankAccountsPutResponse struct {
	BankAccountsPut200ApplicationJSONObject map[string]interface{}
	ContentType                             string
	StatusCode                              int64
}

package operations

import (
	"openapi/pkg/models/shared"
)

type BankAccountsPostRequest struct {
	Request shared.BankAccountDto `request:"mediaType=application/json"`
}

type BankAccountsPostResponse struct {
	BankAccountsPost200ApplicationJSONObject map[string]interface{}
	ContentType                              string
	StatusCode                               int64
}

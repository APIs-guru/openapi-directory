package operations

import (
	"openapi/pkg/models/shared"
)

type CustomersGetAccountTransPathParams struct {
	ItemID int64 `pathParam:"style=simple,explode=false,name=itemId"`
}

type CustomersGetAccountTransRequest struct {
	PathParams CustomersGetAccountTransPathParams
}

type CustomersGetAccountTransResponse struct {
	AccountTranDtos []shared.AccountTranDto
	ContentType     string
	StatusCode      int64
}

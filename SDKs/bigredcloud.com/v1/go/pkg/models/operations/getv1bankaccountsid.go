package operations

import (
	"openapi/pkg/models/shared"
)

type GetV1BankAccountsIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetV1BankAccountsIDRequest struct {
	PathParams GetV1BankAccountsIDPathParams
}

type GetV1BankAccountsIDResponse struct {
	BankAccountDto *shared.BankAccountDto
	ContentType    string
	StatusCode     int64
}

package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type GetAccountRequest struct {
	PathParams GetAccountPathParams
}

type GetAccountResponse struct {
	Account     *shared.Account
	ContentType string
	StatusCode  int64
}

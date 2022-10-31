package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountByIDPathParams struct {
	Ican int64 `pathParam:"style=simple,explode=false,name=ican"`
}

type GetAccountByIDRequest struct {
	PathParams GetAccountByIDPathParams
}

type GetAccountByIDResponse struct {
	ContentType                                                                    string
	StatusCode                                                                     int64
	OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems *shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems
}

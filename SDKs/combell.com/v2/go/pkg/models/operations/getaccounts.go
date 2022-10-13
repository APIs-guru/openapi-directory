package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountsQueryParams struct {
	AssetType  *shared.AssetTypeEnum `queryParam:"style=form,explode=true,name=asset_type"`
	Identifier *string               `queryParam:"style=form,explode=true,name=identifier"`
	Skip       *int32                `queryParam:"style=form,explode=true,name=skip"`
	Take       *int32                `queryParam:"style=form,explode=true,name=take"`
}

type GetAccountsRequest struct {
	QueryParams GetAccountsQueryParams
}

type GetAccountsResponse struct {
	Accounts    []shared.Account
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}

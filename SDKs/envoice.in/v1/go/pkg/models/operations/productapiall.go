package operations

import (
	"openapi/pkg/models/shared"
)

type ProductAPIAllQueryParams struct {
	QueryOptionsPage     *int32 `queryParam:"style=form,explode=true,name=queryOptions.page"`
	QueryOptionsPageSize *int32 `queryParam:"style=form,explode=true,name=queryOptions.pageSize"`
}

type ProductAPIAllHeaders struct {
	XAuthKey    string `header:"style=simple,explode=false,name=x-auth-key"`
	XAuthSecret string `header:"style=simple,explode=false,name=x-auth-secret"`
}

type ProductAPIAllRequest struct {
	QueryParams ProductAPIAllQueryParams
	Headers     ProductAPIAllHeaders
}

type ProductAPIAllResponse struct {
	Body                             []byte
	ContentType                      string
	ListResultProductDetailsAPIModel *shared.ListResultProductDetailsAPIModel
	StatusCode                       int64
}

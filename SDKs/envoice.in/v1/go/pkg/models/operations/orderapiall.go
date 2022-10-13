package operations

import (
	"openapi/pkg/models/shared"
)

type OrderAPIAllQueryParams struct {
	QueryOptionsPage     *int32 `queryParam:"style=form,explode=true,name=queryOptions.page"`
	QueryOptionsPageSize *int32 `queryParam:"style=form,explode=true,name=queryOptions.pageSize"`
}

type OrderAPIAllHeaders struct {
	XAuthKey    string `header:"name=x-auth-key"`
	XAuthSecret string `header:"name=x-auth-secret"`
}

type OrderAPIAllRequest struct {
	QueryParams OrderAPIAllQueryParams
	Headers     OrderAPIAllHeaders
}

type OrderAPIAllResponse struct {
	Body                           []byte
	ContentType                    string
	ListResultOrderDetailsAPIModel *shared.ListResultOrderDetailsAPIModel
	StatusCode                     int64
}

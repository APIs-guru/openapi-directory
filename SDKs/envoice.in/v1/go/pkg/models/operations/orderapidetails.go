package operations

import (
	"openapi/pkg/models/shared"
)

type OrderAPIDetailsQueryParams struct {
	ID int32 `queryParam:"style=form,explode=true,name=id"`
}

type OrderAPIDetailsHeaders struct {
	XAuthKey    string `header:"style=simple,explode=false,name=x-auth-key"`
	XAuthSecret string `header:"style=simple,explode=false,name=x-auth-secret"`
}

type OrderAPIDetailsRequest struct {
	QueryParams OrderAPIDetailsQueryParams
	Headers     OrderAPIDetailsHeaders
}

type OrderAPIDetailsResponse struct {
	Body                     []byte
	ContentType              string
	OrderFullDetailsAPIModel *shared.OrderFullDetailsAPIModel
	StatusCode               int64
}

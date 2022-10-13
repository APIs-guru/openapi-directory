package operations

import (
	"openapi/pkg/models/shared"
)

type ClientAPIDetailsQueryParams struct {
	ID int32 `queryParam:"style=form,explode=true,name=id"`
}

type ClientAPIDetailsHeaders struct {
	XAuthKey    string `header:"name=x-auth-key"`
	XAuthSecret string `header:"name=x-auth-secret"`
}

type ClientAPIDetailsRequest struct {
	QueryParams ClientAPIDetailsQueryParams
	Headers     ClientAPIDetailsHeaders
}

type ClientAPIDetailsResponse struct {
	Body                  []byte
	ClientDetailsAPIModel *shared.ClientDetailsAPIModel
	ContentType           string
	StatusCode            int64
}

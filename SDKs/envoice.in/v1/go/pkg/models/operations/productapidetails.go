package operations

import (
	"openapi/pkg/models/shared"
)

type ProductAPIDetailsQueryParams struct {
	ID int32 `queryParam:"style=form,explode=true,name=id"`
}

type ProductAPIDetailsHeaders struct {
	XAuthKey    string `header:"style=simple,explode=false,name=x-auth-key"`
	XAuthSecret string `header:"style=simple,explode=false,name=x-auth-secret"`
}

type ProductAPIDetailsRequest struct {
	QueryParams ProductAPIDetailsQueryParams
	Headers     ProductAPIDetailsHeaders
}

type ProductAPIDetailsResponse struct {
	Body                       []byte
	ContentType                string
	ProductFullDetailsAPIModel *shared.ProductFullDetailsAPIModel
	StatusCode                 int64
}

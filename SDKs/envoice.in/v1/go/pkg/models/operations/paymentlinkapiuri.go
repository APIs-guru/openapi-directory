package operations

import (
	"openapi/pkg/models/shared"
)

type PaymentLinkAPIURIQueryParams struct {
	ID int32 `queryParam:"style=form,explode=true,name=id"`
}

type PaymentLinkAPIURIHeaders struct {
	XAuthKey    string `header:"style=simple,explode=false,name=x-auth-key"`
	XAuthSecret string `header:"style=simple,explode=false,name=x-auth-secret"`
}

type PaymentLinkAPIURIRequest struct {
	QueryParams PaymentLinkAPIURIQueryParams
	Headers     PaymentLinkAPIURIHeaders
}

type PaymentLinkAPIURIResponse struct {
	Body                   []byte
	ContentType            string
	PaymentLinkURIAPIModel *shared.PaymentLinkURIAPIModel
	StatusCode             int64
}

package operations

import (
	"openapi/pkg/models/shared"
)

type PaymentLinkAPIAllQueryParams struct {
	QueryOptionsPage     *int32 `queryParam:"style=form,explode=true,name=queryOptions.page"`
	QueryOptionsPageSize *int32 `queryParam:"style=form,explode=true,name=queryOptions.pageSize"`
}

type PaymentLinkAPIAllHeaders struct {
	XAuthKey    string `header:"style=simple,explode=false,name=x-auth-key"`
	XAuthSecret string `header:"style=simple,explode=false,name=x-auth-secret"`
}

type PaymentLinkAPIAllRequest struct {
	QueryParams PaymentLinkAPIAllQueryParams
	Headers     PaymentLinkAPIAllHeaders
}

type PaymentLinkAPIAllResponse struct {
	Body                  []byte
	ContentType           string
	ListResultPaymentLink *shared.ListResultPaymentLink
	StatusCode            int64
}

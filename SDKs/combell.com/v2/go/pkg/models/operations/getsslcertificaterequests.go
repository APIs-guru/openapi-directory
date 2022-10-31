package operations

import (
	"openapi/pkg/models/shared"
)

type GetSslCertificateRequestsQueryParams struct {
	Skip *int32 `queryParam:"style=form,explode=true,name=skip"`
	Take *int32 `queryParam:"style=form,explode=true,name=take"`
}

type GetSslCertificateRequestsRequest struct {
	QueryParams GetSslCertificateRequestsQueryParams
}

type GetSslCertificateRequestsResponse struct {
	ContentType            string
	Headers                map[string][]string
	SslCertificateRequests []shared.SslCertificateRequest
	StatusCode             int64
}

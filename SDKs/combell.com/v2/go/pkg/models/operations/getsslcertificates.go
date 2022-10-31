package operations

import (
	"openapi/pkg/models/shared"
)

type GetSslCertificatesQueryParams struct {
	Skip *int32 `queryParam:"style=form,explode=true,name=skip"`
	Take *int32 `queryParam:"style=form,explode=true,name=take"`
}

type GetSslCertificatesRequest struct {
	QueryParams GetSslCertificatesQueryParams
}

type GetSslCertificatesResponse struct {
	ContentType     string
	Headers         map[string][]string
	SslCertificates []shared.SslCertificate
	StatusCode      int64
}

package operations

import (
	"openapi/pkg/models/shared"
)

type GetSslCertificateRequestPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetSslCertificateRequestRequest struct {
	PathParams GetSslCertificateRequestPathParams
}

type GetSslCertificateRequestResponse struct {
	ContentType                 string
	Headers                     map[string][]string
	SslCertificateRequestDetail *shared.SslCertificateRequestDetail
	StatusCode                  int64
}

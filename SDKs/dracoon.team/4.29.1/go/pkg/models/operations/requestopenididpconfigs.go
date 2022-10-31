package operations

import (
	"openapi/pkg/models/shared"
)

type RequestOpenIDIdpConfigsHeaders struct {
	XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
}

type RequestOpenIDIdpConfigsRequest struct {
	Headers RequestOpenIDIdpConfigsHeaders
}

type RequestOpenIDIdpConfigsResponse struct {
	ContentType      string
	ErrorResponse    *shared.ErrorResponse
	OpenIDIdpConfigs []shared.OpenIDIdpConfig
	StatusCode       int64
}

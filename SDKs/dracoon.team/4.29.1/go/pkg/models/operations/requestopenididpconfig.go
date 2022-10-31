package operations

import (
	"openapi/pkg/models/shared"
)

type RequestOpenIDIdpConfigPathParams struct {
	IdpID int32 `pathParam:"style=simple,explode=false,name=idp_id"`
}

type RequestOpenIDIdpConfigHeaders struct {
	XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
}

type RequestOpenIDIdpConfigRequest struct {
	PathParams RequestOpenIDIdpConfigPathParams
	Headers    RequestOpenIDIdpConfigHeaders
}

type RequestOpenIDIdpConfigResponse struct {
	ContentType     string
	ErrorResponse   *shared.ErrorResponse
	OpenIDIdpConfig *shared.OpenIDIdpConfig
	StatusCode      int64
}

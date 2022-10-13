package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateOpenIDIdpConfigPathParams struct {
	IdpID int32 `pathParam:"style=simple,explode=false,name=idp_id"`
}

type UpdateOpenIDIdpConfigHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type UpdateOpenIDIdpConfigRequest struct {
	PathParams UpdateOpenIDIdpConfigPathParams
	Headers    UpdateOpenIDIdpConfigHeaders
	Request    shared.UpdateOpenIDIdpConfigRequest `request:"mediaType=application/json"`
}

type UpdateOpenIDIdpConfigResponse struct {
	ContentType     string
	ErrorResponse   *shared.ErrorResponse
	OpenIDIdpConfig *shared.OpenIDIdpConfig
	StatusCode      int64
}

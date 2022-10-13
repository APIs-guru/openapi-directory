package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveOpenIDIdpConfigPathParams struct {
	IdpID int32 `pathParam:"style=simple,explode=false,name=idp_id"`
}

type RemoveOpenIDIdpConfigHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type RemoveOpenIDIdpConfigRequest struct {
	PathParams RemoveOpenIDIdpConfigPathParams
	Headers    RemoveOpenIDIdpConfigHeaders
}

type RemoveOpenIDIdpConfigResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}

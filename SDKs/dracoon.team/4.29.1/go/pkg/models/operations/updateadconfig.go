package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAdConfigPathParams struct {
	AdID int32 `pathParam:"style=simple,explode=false,name=ad_id"`
}

type UpdateAdConfigHeaders struct {
	XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
}

type UpdateAdConfigRequest struct {
	PathParams UpdateAdConfigPathParams
	Headers    UpdateAdConfigHeaders
	Request    shared.UpdateActiveDirectoryConfigRequest `request:"mediaType=application/json"`
}

type UpdateAdConfigResponse struct {
	ActiveDirectoryConfig *shared.ActiveDirectoryConfig
	ContentType           string
	ErrorResponse         *shared.ErrorResponse
	StatusCode            int64
}

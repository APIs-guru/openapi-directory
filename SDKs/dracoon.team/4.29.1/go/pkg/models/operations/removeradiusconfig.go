package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveRadiusConfigHeaders struct {
	XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
}

type RemoveRadiusConfigRequest struct {
	Headers RemoveRadiusConfigHeaders
}

type RemoveRadiusConfigResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}

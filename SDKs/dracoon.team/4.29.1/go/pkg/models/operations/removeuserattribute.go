package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveUserAttributePathParams struct {
	Key    string `pathParam:"style=simple,explode=false,name=key"`
	UserID int64  `pathParam:"style=simple,explode=false,name=user_id"`
}

type RemoveUserAttributeHeaders struct {
	XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
}

type RemoveUserAttributeRequest struct {
	PathParams RemoveUserAttributePathParams
	Headers    RemoveUserAttributeHeaders
}

type RemoveUserAttributeResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}

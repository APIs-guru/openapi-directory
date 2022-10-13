package operations

import (
	"openapi/pkg/models/shared"
)

type SetUserAttributesPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type SetUserAttributesHeaders struct {
	XSdsAuthToken  *string      `header:"name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"name=X-Sds-Date-Format"`
}

type SetUserAttributesRequest struct {
	PathParams SetUserAttributesPathParams
	Headers    SetUserAttributesHeaders
	Request    shared.UserAttributes `request:"mediaType=application/json"`
}

type SetUserAttributesResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
	UserData      *shared.UserData
}
